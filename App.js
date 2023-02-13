import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import ImagePlaceholder from './ImagePlaceholder';
import ProfilePic from './ProfilePic';

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <View style={styles.container}>
      {imageLoaded ? (
        <ProfilePic imageLoaded={imageLoaded} />
      ) : (
        <ImagePlaceholder />
      )}
      <Button onPress={() => setImageLoaded(!imageLoaded)} title={imageLoaded ? "Reset" : "Mark image as loaded"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
