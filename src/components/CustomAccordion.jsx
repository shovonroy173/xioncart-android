/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Platform,
  UIManager,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CustomAccordion = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const animationValues = useRef(data.map(() => new Animated.Value(0))).current;

  const toggleAccordion = index => {
    if (activeIndex === index) {
      animate(index, false);
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        animate(activeIndex, false);
      }
      animate(index, true);
      setActiveIndex(index);
    }
  };

  const animate = (index, expand) => {
    Animated.timing(animationValues[index], {
      toValue: expand ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  return (
    <View>
      {data.map((item, index) => {
        const animatedValue = animationValues[index];

        const height = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50], // adjust as needed
        });

        const plusOpacity = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        });

        const minusOpacity = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        });

        const rotate = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'],
        });

        return (
          <ThemedView key={index}>
            <TouchableOpacity
              onPress={() => toggleAccordion(index)}
              className="flex-row justify-between px-2 py-3 "
              activeOpacity={0.8}>
              <ThemedText styles="font-Medium text-lg">{item.title}</ThemedText>
              <ThemedView styles="w-5 h-5">
                <Animated.View
                  style={{
                    position: 'absolute',
                    opacity: plusOpacity,
                    transform: [{rotate}],
                  }}>
                  <Feather name="plus" size={20} color="#333" />
                </Animated.View>
                <Animated.View
                  style={{
                    position: 'absolute',
                    opacity: minusOpacity,
                    transform: [{rotate}],
                  }}>
                  <Feather name="minus" size={20} color="#333" />
                </Animated.View>
              </ThemedView>
            </TouchableOpacity>
            <ThemedView>
              <Animated.View style={[styles.animatedContainer, {height}]}>
                <ThemedText styles="font-Regular">{item.body1}</ThemedText>
                <ThemedText styles="font-Regular">{item.body2}</ThemedText>
              </Animated.View>
            </ThemedView>
          </ThemedView>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    overflow: 'hidden',
    paddingHorizontal: responsiveWidth(2.2),
    gap: responsiveHeight(1),
  },
});

export default CustomAccordion;
