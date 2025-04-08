/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useSheetContext} from './GlobalSheetContext';
import MenuLeft from './MenuLeft';

const {width, height} = Dimensions.get('window');
const SHEET_ANIMATION_DURATION = 300;

const MenuLeftSheet = ({id}) => {
  const {sheets, closeSheet} = useSheetContext();
  const sheet = sheets[id];
  const side = sheet?.side || 'left';

  const translate = useSharedValue(-width * 0.8);
  const opacity = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  useEffect(() => {
    const initialTranslate = -width * 0.8;

    if (sheet?.visible) {
      translate.value = withTiming(0, {duration: SHEET_ANIMATION_DURATION});
      opacity.value = withDelay(
        SHEET_ANIMATION_DURATION,
        withTiming(0.4, {duration: 200}),
      );
      contentOpacity.value = withDelay(
        SHEET_ANIMATION_DURATION,
        withTiming(1, {duration: 200}),
      );
    } else {
      translate.value = withTiming(initialTranslate, {
        duration: SHEET_ANIMATION_DURATION,
      });
      opacity.value = withTiming(0, {duration: 200});
      contentOpacity.value = withTiming(0, {duration: 100});
    }
  }, [translate, opacity, contentOpacity, sheet]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translate.value}],
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width * 0.8,
    left: 0,
    height: height,
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    backgroundColor: 'rgba(0,0,0,0.4)',
    ...StyleSheet.absoluteFillObject,
  }));

  const panGesture = Gesture.Pan().onEnd(e => {
    const threshold = 100;
    if (e.translationX < -threshold) {
      runOnJS(closeSheet)(id);
    }
  });

  if (!sheet?.visible) {
    return null;
  }

  return (
    <>
      <Animated.View style={backdropStyle}>
        <Pressable style={{flex: 1}} onPress={() => closeSheet(id)} />
      </Animated.View>

      <GestureDetector gesture={side === 'left' ? panGesture : Gesture.Tap()}>
        <Animated.View style={[styles.sheet, animatedStyle]}>
          <View style={styles.content}>
            <MenuLeft />
          </View>
        </Animated.View>
      </GestureDetector>
    </>
  );
};

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: '#fff',
    zIndex: 1000,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
});

export default MenuLeftSheet;
