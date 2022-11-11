import React, { useRef } from 'react';
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const { opacity, position, fadeIn, FadeOut, startMovingPosition } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button title="FadeIn" onPress={() => {
        fadeIn();
        startMovingPosition(-100, 800);
      }} />
      <View style={{ margin: 5 }} />
      <Button title="FadeOut" onPress={FadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'yellow',
    width: 150,
    height: 150,
    borderColor: 'blue',
    borderWidth: 5,
    borderRadius: 15,
    elevation: 9,
  },
});
