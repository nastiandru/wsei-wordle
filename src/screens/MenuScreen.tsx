import { BackHandler, Button, View, StyleSheet } from "react-native";
import React, { useContext,useState } from "react";
import { ThemeContext } from "../ThemeContext";

export default function MenuScreen({ navigation }: { navigation: any }) : JSX.Element {
    const { isDarkMode } = useContext(ThemeContext);
    const [newGameButtonColor, setNewGameButtonColor] = useState("#778899");

    const handleNewGamePress = () => {
        const previousColor = newGameButtonColor; 
        setNewGameButtonColor("#00FF00"); 

        setTimeout(() => {
            setNewGameButtonColor(previousColor); 
        }, 1000); 

        navigation.navigate('Game');
    };

    return (
        <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.buttonContainer}>
      <Button
                    title="New Game"
                    color={newGameButtonColor} 
                    onPress={handleNewGamePress} 
                />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Settings"
          color="#CD853F"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="About"
          color="#CD853F"
          onPress={() => navigation.navigate('About')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Exit"
          color="#CD853F"
          onPress={() => BackHandler.exitApp()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   
        container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff", // Світла тема
        },
        darkContainer: {
          backgroundColor: "#000000", // Темна тема
        },
  buttonContainer: {
    width: '70%',
    marginVertical: 10,
  },
});