import {StyleSheet, Text, View} from "react-native";
import {LetterStatus} from "./LetterStatus";
import {LetterState} from "./LetterState";
import React, {useContext} from "react";
import { ThemeContext } from "../ThemeContext";

export default function Tile({ letter, status }: LetterState) {
    const { isDarkMode } = useContext(ThemeContext);

    const containerStyles: any[] = [styles.container]
    const textStyles: any[] = [styles.text]

    if(status != LetterStatus.DEFAULT && status) {
        if(status == LetterStatus.CORRECT) {
            containerStyles.push(styles.guessCorrect)
        }
        if(status == LetterStatus.PRESENT) {
            containerStyles.push(styles.guessInWord)
        }
        if(status == LetterStatus.ABSENT) {
            containerStyles.push(styles.guessNotInWord)
        }

        textStyles.push(styles.guessedLetter)
    }
    else {
        if(letter) {
            containerStyles.push(styles.guessFilled)
            textStyles.push(styles.textFilled)
        }
        else {
            containerStyles.push(styles.guessEmpty)
        }
    }

    if (isDarkMode) {
        textStyles.push(styles.textDarkMode); // Колір тексту у темній темі
      }

    return (
        <View style={containerStyles}>
            <Text style={textStyles}>{ letter }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        color: "#000000",
    },
    textDarkMode: {
        color: "#ffffff", 
      },
    text: {
        fontSize: 32,
        fontWeight: "bold",
    },
    guessedLetter: {
        color: "#fff",
    },
    guessCorrect: {
        backgroundColor: "#6aaa64",
        borderColor: "#6aaa64",
    },
    guessInWord: {
        backgroundColor: "#c9b458",
        borderColor: "#c9b458",
    },
    guessNotInWord: {
        backgroundColor: "#787c7e",
        borderColor: "#787c7e",
    },
    guessEmpty: {
        borderColor: "#d3d6da"
    },
    guessFilled: {
        borderColor: '#878a8c',
    },
    textFilled: {
        color: '#000000'
    }
})
