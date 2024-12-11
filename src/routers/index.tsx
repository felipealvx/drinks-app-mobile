import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Details } from "../screens/Details";

export type AppStackParamList = {
    Home: undefined;
    Details: undefined;
};

const AppStack = createStackNavigator();

export const Routes = () => {
    return (
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Details" component={Details} />
        </AppStack.Navigator>
    );
};