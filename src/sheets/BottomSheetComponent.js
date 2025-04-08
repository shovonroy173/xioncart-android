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
import CartRight from './CartRight';

const {height} = Dimensions.get('window');
const SHEET_ANIMATION_DURATION = 300;

const BottomSheetComponent = ({id}) => {
  const {sheets, closeSheet} = useSheetContext();
  const sheet = sheets[id];
  const side = sheet?.side || 'bottom';

  const translate = useSharedValue(height);
  const opacity = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  useEffect(() => {
    const initialTranslate = height;

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
  }, [sheet, translate, opacity, contentOpacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translate.value}],
    position: 'absolute',
    left: 0,
    right: 0,
    height: height * 0.5,
    bottom: 0,
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    backgroundColor: 'rgba(0,0,0,0.4)',
    ...StyleSheet.absoluteFillObject,
  }));

  const panGesture = Gesture.Pan().onEnd(e => {
    const threshold = 100;
    if (e.translationY > threshold) {
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

      <GestureDetector gesture={side === 'bottom' ? panGesture : Gesture.Tap()}>
        <Animated.View style={[styles.sheet, animatedStyle]}>
          <View style={styles.content}>
            <CartRight />
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

export default BottomSheetComponent;
