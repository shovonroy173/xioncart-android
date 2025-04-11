import {Image, View} from 'react-native';
import React from 'react';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedViewBorder from '../utils/ThemedViewBorder';
import CustomAccordion from './CustomAccordion';
import {payment} from '../../assets/data';
import {
  responsiveHeight,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {useThemeColor} from '../utils/useThemeColor';

const data = [
  {id: 1, title: 'Help', body1: 'FAQ', body2: 'Support'},
  {id: 2, title: 'About us', body1: 'Our Story', body2: 'Career'},
  {
    id: 3,
    title: 'Sign Up for Email',
    body1:
      'Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!',
  },
];

const Footer = () => {
  const {icon} = useThemeColor();
  return (
    <ThemedView
      style={{
        paddingBottom: responsiveScreenHeight(2),
        gap: responsiveHeight(4),
      }}>
      <Image
        source={require('../../assets/images/logo.webp')}
        className="w-40 h-20"
      />
      <ThemedView styles="gap-2">
        <ThemedText styles="font-Regular">
          Address: 69/M (3rd Floor), Panthapath, Dhaka-1205, Bangladesh
        </ThemedText>
        <ThemedText styles="font-Regular">
          Email: support@xioncart.com
        </ThemedText>
        <ThemedText styles="font-Regular">Phone: +8801671437932</ThemedText>
      </ThemedView>
      <ThemedText styles="underline flex-row item-center">
        <ThemedText styles="font-Regular">Get Direction</ThemedText>
        <Feather name="arrow-up-right" size={20} color={icon} />
      </ThemedText>
      <ThemedView styles="flex-row gap-2">
        <ThemedViewBorder styles="p-1 border w-fit rounded-full">
          <MaterialCommunityIcons name="facebook" size={20} color={icon} />
        </ThemedViewBorder>
        <ThemedViewBorder styles="p-1 border w-fit rounded-full">
          <MaterialCommunityIcons name="twitter" size={20} color={icon} />
        </ThemedViewBorder>
      </ThemedView>
      <CustomAccordion data={data} />
      <View className="h-[1px] bg-zinc-300" />
      <ThemedText styles="text-center font-Medium">
        © 2025 Xion Cart. All Rights Reserved
      </ThemedText>
      <ThemedView styles="flex-row gap-2 justify-center">
        {payment.map(item => (
          <Image
            key={item.id}
            source={{uri: item?.url}}
            className="w-14 h-10 object-cover"
          />
        ))}
        <Image />
      </ThemedView>
    </ThemedView>
  );
};

export default Footer;
