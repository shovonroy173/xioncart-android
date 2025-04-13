import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  useColorScheme,
} from 'react-native';
import React from 'react';
import ThemedText from '../utils/ThemedText';
import ThemedTextInput from '../utils/ThemedTextInput';
import {useForm} from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers/yup';
// import {loginSchema} from '../utils/loginSchema';
import {useRegisterMutation} from '../redux/slices/authSlice';
import ThemedView from '../utils/ThemedView';
import ThemedViewLightRed from '../utils/ThemedViewLightRed';
import ThemedPressable from '../utils/ThemedPressable';
import Feather from 'react-native-vector-icons/Feather';

import {TouchableWithoutFeedback} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const theme = useColorScheme();
  const [register] = useRegisterMutation();

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
      const val = {
        name: data.firstName,
        email: data.email,
        password: data.password,
        // phone: data.phone,
      };
      console.log(val);

      const res = await register(val).unwrap();
      console.log('LINE AT 21', res);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      className="flex-1">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
        <ThemedView styles="flex-1">
          <ThemedViewLightRed
            styles="justify-center items-center"
            style={{height: responsiveHeight(20)}}>
            <ThemedText styles="text-2xl font-Bold">Register</ThemedText>
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
              <ThemedText styles="text-xl font-Medium pb-1">
                Register
              </ThemedText>
              <ThemedText styles="text-md font-Regular pb-1">
                Sign up for early Sale access plus tailored new arrivals, trends
                and promotions. To opt out, click unsubscribe in our phones.
              </ThemedText>
              <ThemedTextInput
                name="firstName"
                control={control}
                error={errors?.firstName?.message}
                label="First Name"
                placeholder="Enter your first name"
                type="text"
              />
              <ThemedTextInput
                name="lastName"
                control={control}
                error={errors?.lastName?.message}
                label="Last Name"
                placeholder="Enter your last name"
                type="text"
              />
              <ThemedTextInput
                name="email"
                control={control}
                error={errors?.email?.message}
                label="Email Address (Optional)"
                placeholder="Enter your email"
                type="email"
              />{' '}
              <ThemedTextInput
                name="phone"
                control={control}
                error={errors?.phone?.message}
                label="Phone"
                placeholder="Enter your phone number"
                type="text"
              />
              <ThemedTextInput
                name="password"
                control={control}
                error={errors?.password?.message}
                label="Password *"
                placeholder="Enter your password"
                type="text"
              />
              <ThemedView styles="flex-row justify-between">
                <ThemedText styles="font-Medium underline">
                  Already has an account?
                </ThemedText>

                <Pressable
                  onPress={() => navigation.navigate('Login')}
                  className="flex-row gap-1">
                  <ThemedText styles="font-Medium underline">Login</ThemedText>
                  <ThemedText>
                    <Feather name="arrow-up-right" size={20} />
                  </ThemedText>
                </Pressable>
              </ThemedView>
            </ScrollView>
            <ThemedView styles="pb-2">
              <ThemedPressable
                styles=" rounded-lg"
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

export default RegisterScreen;
