import React from 'react'
import { Animated, Image } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
}

export const FadeInImage = ({ uri }: Props) => {

  const { opacity, fadeIn } = useAnimation();

  return (
    <Animated.Image
      source={{ uri }}
      onLoadEnd={fadeIn}
      style={{
        width: '100%',
        height: 400,
        opacity
      }}
    />

  )
}
