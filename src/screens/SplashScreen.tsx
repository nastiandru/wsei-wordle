import React, { useEffect } from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  Menu: undefined;
  Game: undefined;
};

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

export default function SplashScreen({ navigation }: SplashScreenProps): JSX.Element {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Menu');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground source={require('../splashscreen.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Wordle</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Nad projektem pracowali:</Text>
          <Text style={styles.text}>Ihor Sukhorda</Text>
          <Text style={styles.text}>Anastasiia Andrushkevych</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  textContainer: {
    marginTop: '70%',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
});