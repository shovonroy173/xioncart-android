/* eslint-disable react-native/no-inline-styles */
import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownBox = ({sortOptions}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('default');


  return (
    <DropDownPicker
      open={open}
      value={value}
      items={sortOptions}
      setOpen={setOpen}
      setValue={setValue}
      showTickIcon={false}
      style={{
        borderWidth: 1,
        borderColor: '#e4e4e7',
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
        color: '#333',
      }}
      selectedItemLabelStyle={{
        color: '#000',
        fontFamily: 'AlbertSans-SemiBold',
      }}
      selectedItemContainerStyle={{
        backgroundColor: '#f0f0f0',
      }}
    />
  );
};

export default DropdownBox;
