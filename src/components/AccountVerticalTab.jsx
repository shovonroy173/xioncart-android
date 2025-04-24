/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';

import {
  DescriptionRoute,
  ReturnPolicyRoute,
  ReviewRoute,
  ShippingRoute,
} from './TabRoutes';

const AccountVerticalTab = ({item}) => {
  const [index, setIndex] = useState(0);

  const routes = [
    {key: 'first', title: 'Description'},
    {key: 'second', title: 'Review'},
    {key: 'third', title: 'Shipping'},
    {key: 'fourth', title: 'Return Policies'},
  ];

  const renderContent = () => {
    switch (routes[index].key) {
      case 'first':
        return <DescriptionRoute item={item} />;
      case 'second':
        return <ReviewRoute item={item} />;
      case 'third':
        return <ShippingRoute item={item} />;
      case 'fourth':
        return <ReturnPolicyRoute item={item} />;
      default:
        return null;
    }
  };

  return (
    <ThemedView style={{padding: 16}}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          gap: 12,
        }}
        showsVerticalScrollIndicator={false}>
        {routes.map((route, i) => {
          const isActive = index === i;
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => setIndex(i)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 16,
                borderWidth: 1,
                borderColor: isActive ? '#eab308' : '#ccc',
                borderRadius: 6,
                backgroundColor: isActive ? '#fef9c3' : 'transparent',
              }}>
              <ThemedText
                styles={`font-Medium ${isActive ? 'text-yellow-600' : ''}`}>
                {route.title}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={{marginTop: 24}}>{renderContent()}</View>
    </ThemedView>
  );
};

export default AccountVerticalTab;
