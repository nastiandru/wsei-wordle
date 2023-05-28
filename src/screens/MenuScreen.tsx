import { BackHandler, Button, View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function MenuScreen({ navigation }: { navigation: any }) : JSX.Element {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.buttonContainer}>
        <Button
          title="New Game"
          color="#f194ff"
          onPress={() => navigation.navigate('Game')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Settings"
          color="#f194ff"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="About"
          color="#f194ff"
          onPress={() => navigation.navigate('About')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Exit"
          color="#f194ff"
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