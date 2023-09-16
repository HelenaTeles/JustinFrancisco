import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ImageComponent = ({ source }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const ButtonComponent = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Adore o Justin</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const handleButtonPress = () => {
    alert('Justin agradece pelo seu carinho :)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Helena Teles 3A</Text>
      <ImageComponent source={require('./assets/justin1.webp')} />
      <ImageComponent source={require('./assets/justin2.png')} />
      <ButtonComponent onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372440',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E7EAE7',
  },
  imageContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#E7EAE7',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '131819',
    fontSize: 18,
  },
});
