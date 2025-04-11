/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Platform,
  UIManager,
  StyleSheet,
  Text,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ThemedPressable from '../utils/ThemedPressable';
import {currencyOptions, languageOptions} from '../../assets/data';
import ThemedTextInput2 from '../utils/ThemedTextInput2';
import {useThemeColor} from '../utils/useThemeColor';
import CustomDropdown from './CustomDropdown';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CustomAccordion = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState(data.map(() => 0));
  const animationValues = useRef(data.map(() => new Animated.Value(0))).current;
  const [mail, setMail] = useState('');
  const {icon} = useThemeColor();
  const toggleAccordion = index => {
    if (activeIndex === index) {
      animate(index, false);
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        animate(activeIndex, false);
      }
      animate(index, true);
      setActiveIndex(index);
    }
  };

  const animate = (index, expand) => {
    Animated.timing(animationValues[index], {
      toValue: expand ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  const onContentLayout = (event, index) => {
    const height = event.nativeEvent.layout.height;
    setHeights(prev => {
      const updated = [...prev];
      updated[index] = height;
      return updated;
    });
  };

  return (
    <View>
      {data.map((item, index) => {
        const animatedValue = animationValues[index];

        const height = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, heights[index] || 0],
        });

        const plusOpacity = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        });

        const minusOpacity = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        });

        const rotate = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'],
        });

        return (
          <ThemedView key={index}>
            <TouchableOpacity
              onPress={() => toggleAccordion(index)}
              className="flex-row justify-between px-2 py-3"
              activeOpacity={0.8}>
              <ThemedText styles="font-Medium text-lg">{item.title}</ThemedText>
              <ThemedView styles="w-5 h-5">
                <Animated.View
                  style={{
                    position: 'absolute',
                    opacity: plusOpacity,
                    transform: [{rotate}],
                  }}>
                  <Feather name="plus" size={20} color={icon} />
                </Animated.View>
                <Animated.View
                  style={{
                    position: 'absolute',
                    opacity: minusOpacity,
                    transform: [{rotate}],
                  }}>
                  <Feather name="minus" size={20} color={icon} />
                </Animated.View>
              </ThemedView>
            </TouchableOpacity>

            <Animated.View style={[styles.animatedContainer, {height}]}>
              <ThemedView
                style={{position: 'absolute', top: 0, left: 10, right: 15}}
                styles="gap-5"
                onLayout={e => onContentLayout(e, index)}>
                {item.id === 3 ? (
                  <>
                    <ThemedText styles="font-Regular">{item.body1}</ThemedText>
                    <ThemedView styles="relative">
                      <ThemedTextInput2
                        value={mail}
                        onChangeText={setMail}
                        placeholder="Enter your email.."
                        styles="p-4 rounded-md border border-zinc-300 font-Regular"
                        keyboardType="email-address"
                      />
                      <ThemedPressable
                        styles="absolute  rounded-md flex-row gap-1"
                        style={{
                          right: responsiveWidth(2),
                          paddingHorizontal: responsiveWidth(4),
                          paddingVertical: responsiveHeight(1),
                          top: responsiveHeight(1),
                        }}>
                        <Text className="text-white font-Medium">
                          Subscribe
                        </Text>
                        <Feather name="arrow-up-right" size={20} color="#fff" />
                      </ThemedPressable>
                    </ThemedView>
                    <ThemedView styles="flex-row gap-2 justify-center">
                      <ThemedView styles="w-40">
                        <CustomDropdown
                          data={currencyOptions}
                          placeholder={currencyOptions[0]?.label}
                        />
                      </ThemedView>

                      <ThemedView styles="w-40">
                        <CustomDropdown
                          data={languageOptions}
                          placeholder={languageOptions[0]?.label}
                        />
                      </ThemedView>
                    </ThemedView>
                  </>
                ) : (
                  <>
                    <ThemedText styles="font-Regular">{item.body1}</ThemedText>
                    <ThemedText styles="font-Regular">{item.body2}</ThemedText>
                  </>
                )}
              </ThemedView>
            </Animated.View>
          </ThemedView>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    overflow: 'hidden',
    paddingHorizontal: responsiveWidth(3),
    gap: responsiveHeight(1),
  },
});

export default CustomAccordion;
