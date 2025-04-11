/* eslint-disable react-native/no-inline-styles */
import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownBox = ({options}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options[0]?.value);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={options}
      setOpen={setOpen}
      setValue={setValue}
      showTickIcon={false}
      // theme="LIGHT"
      style={{
        borderWidth: 1,
        borderColor: '#e4e4e7',
        zIndex: 100,
      }}
      dropDownContainerStyle={{
        marginTop: 10,
        borderRadius: 8,
        borderColor: '#e4e4e7',
        padding: 5,
      }}
      containerStyle={{
        borderRadius: 2,
        zIndex: 1000,
      }}
      textStyle={{
        fontFamily: 'AlbertSans-Regular',
      }}
      labelStyle={{
        fontFamily: 'AlbertSans-Regular',
      }}
      listItemLabelStyle={{
        fontFamily: 'AlbertSans-Regular',
      }}
      selectedItemLabelStyle={{
        fontFamily: 'AlbertSans-SemiBold',
      }}
      selectedItemContainerStyle={{
        backgroundColor: '#f0f0f0',
      }}
    />
  );
};

export default DropdownBox;
