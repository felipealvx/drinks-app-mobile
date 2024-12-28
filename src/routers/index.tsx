import { createStackNavigator } from "@react-navigation/stack";
import { Home, Details } from "../screens";

export type AppStackParamList = {
    Home: undefined;
    Details: {
        drinkId: string;
    };
};

const AppStack = createStackNavigator();

export const Routes = () => {
    return (
        <AppStack.Navigator initialRouteName={"Drinks Native"}>
            <AppStack.Screen 
            name="Drinks Native" 
            component={Home} 
            options={{ 
                headerShown: false,
            }}/>
            <AppStack.Screen 
            name="Details" 
            component={Details} />
        </AppStack.Navigator>
    );
};