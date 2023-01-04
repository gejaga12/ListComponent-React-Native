import React, { useContext, useRef } from 'react';
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const { opacity, position, fadeIn, FadeOut, startMovingPosition } = useAnimation();
  const { theme: {colors} } = useContext(ThemeContext);
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
        
      }}
      color={colors.primary}
      />
      <View style={{ margin: 5 }} />
      <Button title="FadeOut" onPress={FadeOut} color={colors.primary}/>
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
