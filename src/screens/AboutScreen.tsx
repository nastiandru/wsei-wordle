import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext';

export default function AboutScreen(): JSX.Element {
    const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.text, isDarkMode && styles.textDarkMode]}>Wordle</Text>
      <Text style={[styles.description, isDarkMode && styles.descriptionDarkMode]}>
        Wordle is a daily word game that involves figuring out a secret five-letter word. You play by guessing different
        five-letter words to see how close they are to the secret word. 
      </Text>
      <Text style={[styles.description, isDarkMode && styles.descriptionDarkMode]}>
        Not only is Wordle a great brain game, but it also has some psychological benefits for players as well. The game gives players a sense of anticipation as they wait for the next word of the day to drop.
      </Text>
      <Text style={[styles.description, isDarkMode && styles.descriptionDarkMode]}>
      Anticipation is an excellent emotion or psychological feeling to experience, particularly in individuals who are experiencing depression and may not be able to experience strong feelings as a result. 
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff', 
    },
    darkContainer: {
      backgroundColor: '#000000', 
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000',
      marginBottom: 10, 
    },
    textDarkMode: {
      color: '#ffffff', 
    },
    description: {
        fontSize: 19,
        color: '#000000', 
        marginBottom: 4,
      },
      descriptionDarkMode: {
        color: '#ffffff', 
      },
});