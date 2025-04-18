import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import ThemedText from '../utils/ThemedText';
import ThemedTextInput from '../utils/ThemedTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useForm} from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers/yup';
// import {loginSchema} from '../utils/loginSchema';
import {useLoginMutation} from '../redux/slices/authSlice';
import ThemedView from '../utils/ThemedView';
import ThemedViewLightRed from '../utils/ThemedViewLightRed';
import ThemedPressable from '../utils/ThemedPressable';
import {TouchableWithoutFeedback} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {useToast} from 'react-native-toast-notifications';

const LoginScreen = () => {
  const navigation = useNavigation();
  const theme = useColorScheme();
  const toast = useToast();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [login] = useLoginMutation();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    // resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async data => {
    console.log('Form submitted:', data);
    try {
      const res = await login(data).unwrap();
      console.log('LINE AT 21', res);
      toast.show('Login Successfully!', {
        type: 'success',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'slide-in',
      });
      reset();
    } catch (error) {
      console.log(error);
      toast.show(error?.data?.message, {
        type: 'danger',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'slide-in',
      });
    }
    // store.dispatch(authSlice.util.resetApiState());
    // console.log('AFTER RESET:', store.getState().authApi);
    // reset();
  };

  const handleForgetPassword = () => {
    console.log('clicked');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
        <ThemedView styles="flex-1">
          <ThemedViewLightRed
            styles="justify-center items-center"
            style={{height: responsiveHeight(20)}}>
            <ThemedText styles="text-2xl font-Bold">Log in</ThemedText>
          </ThemedViewLightRed>
          <ThemedView
            styles="flex-1"
            style={{
              paddingHorizontal: responsiveWidth(5),
              paddingTop: responsiveHeight(2),
              gap: responsiveHeight(2),
            }}>
            <ScrollView
              className="flex-grow"
              showsVerticalScrollIndicator={false}>
              <ThemedText styles="text-xl font-Medium pb-2">Log in</ThemedText>
              <ThemedTextInput
                name="phone"
                control={control}
                error={errors?.phone?.message}
                label="Phone *"
                placeholder="Enter your phone"
                type="text"
              />{' '}
              <ThemedTextInput
                name="password"
                control={control}
                error={errors?.password?.message}
                label="Password *"
                placeholder="Enter your password"
                type="password"
                secureTextEntry={!isPasswordVisible}
                rightIcon={
                  <Ionicons
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    size={24}
                  />
                }
                onPress={togglePasswordVisibility}
              />
              <Pressable onPress={handleForgetPassword}>
                <ThemedText styles="font-Medium underline">
                  Forgot Password?
                </ThemedText>
              </Pressable>
              <ThemedView styles="flex-row items-center gap-2 mt-5">
                <ThemedText styles="font-Medium">Are new here?</ThemedText>
                <Pressable
                  onPress={() =>
                    navigation.navigate('BottomNavigator', {
                      screen: 'Register',
                    })
                  }
                  className="flex-row gap-1">
                  <ThemedText styles="font-Medium underline">
                    Register
                  </ThemedText>
                  <ThemedText>
                    <Feather name="arrow-up-right" size={20} />
                  </ThemedText>
                </Pressable>
              </ThemedView>
            </ScrollView>
            <ThemedView styles="pb-2">
              <ThemedPressable
                styles="rounded-lg"
                style={{
                  paddingVertical: responsiveHeight(2),
                }}
                onPress={handleSubmit(onSubmit)}>
                <Text
                  className={`text-center text-lg font-SemiBold ${
                    theme === 'dark' ? 'text-black' : 'text-white'
                  }`}>
                  Submit
                </Text>
              </ThemedPressable>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
