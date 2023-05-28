import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About </Text>
      <Text style={styles.description}>Wordle is a daily word game that involves figuring out a secret five-letter word. You play by guessing different five-letter words to see how close they are to the secret word. </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
  }
});