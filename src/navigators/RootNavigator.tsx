import GameScreen from "../screens/GameScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export default function RootNavigator(): JSX.Element {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Game" component={GameScreen} />
            </Navigator>
        </NavigationContainer>
    )
}
