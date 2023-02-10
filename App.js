import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const pulseAnim = useRef(new Animated.Value(0)).current;

  const pulse = () => {
    Animated.timing(pulseAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    pulse();
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imagePlaceholder, { opacity: pulseAnim }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#fce9ee"
  }
});
