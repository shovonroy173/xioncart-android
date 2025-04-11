/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  useColorScheme,
  Dimensions,
  Pressable,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const CustomDropdown = ({
  data = [],
  placeholder = 'Select an option',
  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const buttonRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({top: 0, left: 0, width: 0});
  const [openUpward, setOpenUpward] = useState(false);
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  const MAX_DROPDOWN_HEIGHT = 200;

  const openDropdown = () => {
    buttonRef.current?.measureInWindow((x, y, width, height) => {
      const spaceBelow = SCREEN_HEIGHT - y - height;
      const spaceAbove = y;

      const shouldOpenUpward =
        spaceBelow < MAX_DROPDOWN_HEIGHT && spaceAbove > spaceBelow;

      const top = shouldOpenUpward ? y - MAX_DROPDOWN_HEIGHT + 150 : y + height;
      setDropdownPos({top, left: x, width});
      setOpenUpward(shouldOpenUpward);
      setVisible(true);
      setOpen(!open);
    });
  };

  const handleSelect = item => {
    setSelected(item);
    onSelect?.(item);
    setVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        ref={buttonRef}
        onPress={openDropdown}
        style={[
          styles.button,
          {
            backgroundColor: isDark ? '#000' : '#fff',
            borderColor: isDark ? '#333' : '#ccc',
          },
        ]}>
        <Text
          style={{
            color: isDark ? '#fff' : '#000',
            fontFamily: 'AlbertSans-Medium',
          }}>
          {selected?.label || placeholder}
        </Text>
        <Feather
          name={open ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={isDark ? '#eee' : '#111'}
        />
      </TouchableOpacity>

      {visible && (
        <Modal transparent animationType="none">
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setVisible(false)}>
            <View
              style={[
                styles.dropdown,
                {
                  top: dropdownPos.top,
                  left: dropdownPos.left,
                  width: dropdownPos.width,
                  backgroundColor: isDark ? '#2c2c2c' : '#fff',
                  borderColor: isDark ? '#444' : '#ccc',
                  maxHeight: MAX_DROPDOWN_HEIGHT,
                },
              ]}>
              <FlatList
                data={data}
                keyExtractor={item => item.value.toString()}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    style={styles.option}>
                    <Text
                      style={{
                        color: isDark ? '#eee' : '#111',
                        fontFamily: 'AlbertSans-Medium',
                      }}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </Pressable>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdown: {
    position: 'absolute',
    zIndex: 9999,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default CustomDropdown;
