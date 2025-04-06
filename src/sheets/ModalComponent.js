import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useSheetContext} from './GlobalSheetContext';

const ModalComponent = ({id}) => {
  const {modals, closeModal} = useSheetContext();
  const visible = modals[id];

  const scale = useSharedValue(0.7);
  const opacity = useSharedValue(0);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    backgroundColor: 'rgba(0,0,0,0.4)',
    ...StyleSheet.absoluteFillObject,
  }));

  const modalStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  useEffect(() => {
    if (visible) {
      scale.value = withTiming(1);
      opacity.value = withTiming(0.4);
    } else {
      scale.value = withTiming(0.7);
      opacity.value = withTiming(0);
    }
  }, [opacity, scale, visible]);

  if (!visible) return null;

  return (
    <>
      <Animated.View style={backdropStyle}>
        <Pressable style={{flex: 1}} onPress={() => closeModal(id)} />
      </Animated.View>

      <View style={styles.modalContainer}>
        <Animated.View style={[styles.modalBox, modalStyle]}>
          <Text style={{fontSize: 18}}>Centered Modal: {id}</Text>
          <Pressable onPress={() => closeModal(id)} style={styles.modalClose}>
            <Text>Close</Text>
          </Pressable>
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
  },
  modalBox: {
    width: 300,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  modalClose: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
});

export default ModalComponent;
