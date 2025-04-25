/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TabView} from 'react-native-tab-view';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';

import {
  DescriptionRoute,
  ReturnPolicyRoute,
  ReviewRoute,
  ShippingRoute,
} from './TabRoutes';

export default function TabViewComponent({item}) {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [heights, setHeights] = useState({});
  console.log('Tab view', item);

  const routes = [
    {key: 'first', title: 'Description'},
    {key: 'second', title: 'Review'},
    {key: 'third', title: 'Shipping'},
    {key: 'fourth', title: 'Return Policies'},
  ];
  const scenes = {
    first: props => <DescriptionRoute {...props} item={item} />,
    second: props => <ReviewRoute {...props} item={item} />,
    third: props => <ShippingRoute {...props} item={item} />,
    fourth: props => <ReturnPolicyRoute {...props} item={item} />,
  };
  const renderScene = ({route}) => {
    const Scene = scenes[route.key];
    return (
      <View
        onLayout={e => {
          const sceneHeight = e.nativeEvent.layout.height;
          setHeights(prev => ({...prev, [route.key]: sceneHeight}));
        }}>
        <Scene />
      </View>
    );
  };

  const renderTabBar = () => (
    <ThemedView styles="h-12">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          gap: 25,
        }}>
        {routes.map((route, i) => {
          const isActive = index === i;
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => setIndex(i)}
              style={{
                paddingVertical: 10,
                borderBottomWidth: isActive ? 2 : 0,
                borderBottomColor: '#eab308',
              }}>
              <ThemedText styles="font-Medium">{route.title}</ThemedText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ThemedView>
  );

  return (
    <ThemedView
      style={{
        height: heights[routes[index].key]
          ? heights[routes[index].key] + 50
          : 300,
      }}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        swipeEnabled={true}
        renderTabBar={renderTabBar}
      />
    </ThemedView>
  );
}
