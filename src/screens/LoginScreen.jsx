import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ThemedText from '../utils/ThemedText';
import ThemedTextInput from '../utils/ThemedTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '../utils/loginSchema';
import {useLoginMutation} from '../redux/slices/authSlice';
import ThemedView from '../utils/ThemedView';
import ThemedViewLightRed from '../utils/ThemedViewLightRed';
import ThemedPressable from '../utils/ThemedPressable';

import {Button} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';

const LoginScreen = () => {
  const theme = useColorScheme();
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
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async data => {
    console.log('Form submitted:', data);
    const res = await login(data).unwrap();
    console.log('LINE AT 21', res);
    reset();
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
          <ThemedViewLightRed styles="h-36  justify-center items-center">
            <ThemedText styles="text-2xl font-Bold">Log in</ThemedText>
          </ThemedViewLightRed>
          <ThemedView styles="px-5 pt-5 flex-1 gap-2">
            <ThemedText styles="text-xl font-Medium">Log in</ThemedText>
            <ScrollView
              className="flex-grow"
              showsVerticalScrollIndicator={false}>
              <ThemedTextInput
                name="email"
                control={control}
                error={errors?.email?.message}
                label="Email Address *"
                placeholder="Enter your email"
                type="email"
              /> <ThemedTextInput
              name="email"
              control={control}
              error={errors?.email?.message}
              label="Email Address *"
              placeholder="Enter your email"
              type="email"
            /> <ThemedTextInput
            name="email"
            control={control}
            error={errors?.email?.message}
            label="Email Address *"
            placeholder="Enter your email"
            type="email"
          />
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
                    color={theme === 'dark' ? 'white' : 'black'}
                  />
                }
                onPress={togglePasswordVisibility}
              />
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
                    color={theme === 'dark' ? 'white' : 'black'}
                  />
                }
                onPress={togglePasswordVisibility}
              />
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
                    color={theme === 'dark' ? 'white' : 'black'}
                  />
                }
                onPress={togglePasswordVisibility}
              />
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
                    color={theme === 'dark' ? 'white' : 'black'}
                  />
                }
                onPress={togglePasswordVisibility}
              />
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
                    color={theme === 'dark' ? 'white' : 'black'}
                  />
                }
                onPress={togglePasswordVisibility}
              />

              <Pressable onPress={handleForgetPassword}>
                <ThemedText styles="font-Medium underline">
                  Forgot Password?
                </ThemedText>
              </Pressable>
            </ScrollView>
            <ThemedView styles="py-2">
              <ThemedPressable
                styles="py-3 rounded-lg"
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
