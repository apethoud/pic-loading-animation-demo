import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function ProfilePic({ imageLoaded }) {
  const imageOpacity = useSharedValue(0);

  const animatedImageStyle = useAnimatedStyle(() => {
    return { opacity: imageOpacity.value }
  });

  function animateImage() {
    imageOpacity.value = withTiming(1, { duration: 250 });
  }

  useEffect(() => {
      animateImage();
  }, [imageLoaded])

  return (
    <Animated.Image 
      source={require('./assets/stock_profile_pic.jpeg')} 
      style={[ styles.image, animatedImageStyle ]}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 75
  }
});