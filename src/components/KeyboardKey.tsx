import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface KeyboardKeyProps {
    text: string,
    onPress: any
}

export default function KeyboardKey({ text, onPress }: KeyboardKeyProps): JSX.Element {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.key}>
                <Text style={styles.keyLetter}>
                    { text }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles: any = StyleSheet.create({
    key: {
        backgroundColor: "#d3d6da",
        padding: 10,
        margin: 3,
        borderRadius: 5,
    },
    keyLetter: {
        fontWeight: "500",
        fontSize: 15,
    },
})
