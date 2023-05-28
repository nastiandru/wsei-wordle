import {StyleSheet, View} from "react-native";
import Keyboard from "../components/Keyboard";
import Board from "../components/Board";

export default function GameScreen() : JSX.Element {
    return (
        <View style={styles.container}>
            <Board/>
            <Keyboard/>
        </View>
    )
}

const styles: any = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1,
    }
})
