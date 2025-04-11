import {Controller} from 'react-hook-form';
import {TextInput, View, Text, Pressable} from 'react-native';
import {useColorScheme} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ThemedTextInput = ({
  label,
  placeholder,
  secureTextEntry,
  rightIcon,
  name,
  control,
  error,
  ...props
}) => {
  const theme = useColorScheme();

  // Apply theme-based classes for the TextInput and label
  const themedInputClasses = `${
    theme === 'dark'
      ? 'bg-black text-zinc-200 border-gray-600'
      : 'bg-white text-black border-gray-300'
  }`;

  const themedLabelClasses = `${
    theme === 'dark' ? 'text-zinc-200' : 'text-black'
  } text-md`;

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value, onBlur}}) => (
        <View className="relative">
          <TextInput
            // {...props}
            value={value}
            onChangeText={text => onChange(text)}
            onBlur={onBlur}
            placeholder={placeholder}
            placeholderTextColor={theme === 'dark' ? '#ccc' : '#888'}
            secureTextEntry={secureTextEntry}
            style={{
              paddingHorizontal: responsiveWidth(3),
              paddingBottom: responsiveHeight(1),
              paddingTop: responsiveHeight(5),
            }}
            className={`${themedInputClasses}  border rounded-md font-Regular ${
              error && 'border-red-500'
            }`}
          />
          {label && (
            <Text
              className={`${themedLabelClasses} absolute font-Regular`}
              style={{
                left: responsiveWidth(2),
                top: responsiveHeight(1),
                paddingHorizontal: responsiveWidth(1),
              }}>
              {label}
            </Text>
          )}
          {rightIcon && (
            <Pressable
              onPress={props.onPress}
              className="absolute top-1/2 -translate-y-1/2 z-10"
              style={{
                right: responsiveWidth(3),
              }}
              hitSlop={10}>
              {rightIcon}
            </Pressable>
          )}
          {
            <Text className="text-red-500 text-xs font-Regular">
              {error && error}
            </Text>
          }
        </View>
      )}
    />
  );
};

export default ThemedTextInput;
