import {Image} from 'react-native';
import React from 'react';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedViewBorder from '../utils/ThemedViewBorder';
import CustomAccordion from './CustomAccordion';

const data = [
  {id: 1, title: 'Help', body1: 'FAQ', body2: 'Support'},
  {id: 2, title: 'About us', body1: 'Our Story', body2: 'Career'},
];

const Footer = () => {
  return (
    <ThemedView styles="pb-10">
      <Image
        source={require('../../assets/images/logo.webp')}
        className="w-40 h-20"
      />
      <ThemedView>
        <ThemedText>
          Address: 69/M (3rd Floor), Panthapath, Dhaka-1205, Bangladesh
        </ThemedText>
        <ThemedText>Email: support@xioncart.com</ThemedText>
        <ThemedText>Phone: +8801671437932</ThemedText>
      </ThemedView>
      <ThemedText styles="underline flex-row">
        <ThemedText>Get Direction</ThemedText>
        <Feather name="arrow-up-right" size={20} />
      </ThemedText>
      <ThemedView styles="flex-row gap-2">
        <ThemedViewBorder styles="p-1 border w-fit rounded-full">
          <MaterialCommunityIcons name="facebook" size={20} />
        </ThemedViewBorder>
        <ThemedViewBorder styles="p-1 border w-fit rounded-full">
          <MaterialCommunityIcons name="twitter" size={20} />
        </ThemedViewBorder>
      </ThemedView>
      <CustomAccordion data={data} />
      <Image
        source={require('../../assets/images/logo.webp')}
        className="w-40 h-20"
      />
    </ThemedView>
  );
};

export default Footer;
