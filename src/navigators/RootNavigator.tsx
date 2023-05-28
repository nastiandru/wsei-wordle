import GameScreen from "../screens/GameScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MenuScreen from "../screens/MenuScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function RootNavigator(): JSX.Element {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Menu">
                <Screen name="Menu" component={MenuScreen} />
                <Screen name="Game" component={GameScreen} />
            </Navigator>
        </NavigationContainer>
    )
}
