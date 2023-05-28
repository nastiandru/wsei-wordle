import { BackHandler, Button, View } from "react-native";

export default function MenuScreen({ navigation }: { navigation: any }) : JSX.Element {
    return (
        <View>
            <Button
                title="New Game"
                color="#f194ff"
                onPress={() => navigation.navigate('Game')}
            />
            <Button
                title="Exit"
                color="#f194ff"
                onPress={() => BackHandler.exitApp()}
            />
        </View>
    )
}
