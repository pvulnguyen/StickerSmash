import { StyleSheet, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const pickImageAsync = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      // When true, users can crop the image during the selection process on
      // Android and iOS but not on the web.
      allowsEditing: true,
      quality: 1,
    });

    if (!res.canceled) {
      console.log(res);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label='Choose a photo' onPress={pickImageAsync} />
        <Button label='Use this photo' />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
