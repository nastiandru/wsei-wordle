import {StyleSheet, View} from "react-native";
import Keyboard from "../components/Keyboard";
import Board from "../components/Board";
import React, {useContext} from "react";
import { ThemeContext } from "../ThemeContext";

export default function GameScreen() : JSX.Element {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <View style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Board/>
            <Keyboard/>
        </View>
    )
}

const styles: any = StyleSheet.create({
    container: {
      justifyContent: "space-between",
      flex: 1,
      backgroundColor: "#ffffff", // Світла тема
    },
    darkContainer: {
      backgroundColor: "#000000", // Темна тема
    },
})
