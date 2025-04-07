/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useSheetContext} from './GlobalSheetContext';

const {width, height} = Dimensions.get('window');

const SheetComponent = ({id}) => {
  const {sheets, closeSheet} = useSheetContext();
  const sheet = sheets[id];
  const side = sheet?.side || 'bottom';

  const translate = useSharedValue(getInitialTranslate(side));
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (!sheet) {
      return;
    }

    if (sheet.visible) {
      translate.value = withTiming(0);
      opacity.value = withTiming(0.4);
    } else {
      translate.value = withTiming(getInitialTranslate(side));
      opacity.value = withTiming(0);
    }
  }, [translate, opacity, side, sheet]);

  function getInitialTranslate(sides) {
    switch (sides) {
      case 'bottom':
        return height;
      // case 'top':
      //   return -height;
      case 'left':
        return -width * 0.8;
      case 'right':
        return width * 0.8;
      default:
        return height;
    }
  }

  const animatedStyle = useAnimatedStyle(() => {
    let transformStyle;

    if (side === 'bottom') {
      transformStyle = [{translateY: translate.value}];
    }
    // else if (side === 'top') {
    //   transformStyle = [{ translateY: translate.value }];
    // }
    else {
      transformStyle = [{translateX: translate.value}];
    }

    if (side === 'bottom') {
      return {
        transform: transformStyle,
        position: 'absolute',
        left: 0,
        right: 0,
        height: height * 0.5,
        bottom: 0,
      };
    }
    // else if (side === 'top') {
    //   return {
    //     transform: transformStyle,
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     height: height * 0.5,
    //     top: 0,
    //   };
    // }
    else if (side === 'left') {
      return {
        transform: transformStyle,
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: width * 0.8,
        left: 0,
      };
    } else if (side === 'right') {
      return {
        transform: transformStyle,
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: width * 0.8,
        right: 0,
      };
    }

    return {};
  });

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    backgroundColor: 'rgba(0,0,0,0.4)',
    ...StyleSheet.absoluteFillObject,
  }));

  // Define gestures for bottom (or top in future)
  const panGesture = Gesture.Pan().onEnd(e => {
    const threshold = 100;

    if (
      side === 'bottom' &&
      e.translationY > threshold
      // || side === 'top' && e.translationY < -threshold
    ) {
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
          <ScrollView contentContainerStyle={{padding: 20}}>
            <View
              style={{
                height: 400,
                backgroundColor: '#fff',
                borderRadius: 12,
              }}>
              {/* Your custom content here */}
            </View>
          </ScrollView>
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
});

export default SheetComponent;
