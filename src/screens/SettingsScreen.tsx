import React, { useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import { ThemeContext } from "../ThemeContext";

export default function SettingsScreen(): JSX.Element {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleDarkMode();
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.buttonContainer}>
        <Button
          title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          onPress={handleToggleTheme}
          color="#C71585"
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
    width: "70%",
    marginVertical: 10,
  },
});