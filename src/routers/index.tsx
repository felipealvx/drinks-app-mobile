import { createStackNavigator } from "@react-navigation/stack";
import { Home, Details } from "../screens";

export type AppStackParamList = {
    Home: undefined;
    Details: undefined;
};

const AppStack = createStackNavigator();

export const Routes = () => {
    return (
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen 
            name="Home" 
            component={Home} 
            options={{ 
                headerShown: true,
            }}/>
            <AppStack.Screen 
            name="Details" 
            component={Details} />
        </AppStack.Navigator>
    );
};