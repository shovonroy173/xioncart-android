/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useSheetContext} from './GlobalSheetContext';
import SearchRight from './SearchRight';
import ThemedView from '../utils/ThemedView';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const {width, height} = Dimensions.get('window');
const SHEET_ANIMATION_DURATION = 300;

const RightSearchSheet = ({id}) => {
  const {sheets, closeSheet} = useSheetContext();
  const sheet = sheets[id];
  const side = sheet?.side || 'right';

  const translate = useSharedValue(width * 0.8);
  const opacity = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  useEffect(() => {
    const initialTranslate = width * 0.8;

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
  }, [sheet, opacity, contentOpacity, translate]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translate.value}],
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width * 0.8,
    right: 0,
    height: height,
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    backgroundColor: 'rgba(0,0,0,0.4)',
    ...StyleSheet.absoluteFillObject,
  }));

  const panGesture = Gesture.Pan().onEnd(e => {
    const threshold = 100;
    if (e.translationX > threshold) {
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

      <GestureDetector gesture={side === 'right' ? panGesture : Gesture.Tap()}>
        <Animated.View style={[styles.sheet, animatedStyle]}>
          <ThemedView
            style={{
              flex: 1,
              padding: responsiveHeight(2),
            }}>
            <SearchRight />
          </ThemedView>
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

export default RightSearchSheet;
