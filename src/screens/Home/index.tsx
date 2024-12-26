import { NavigationProp } from "@react-navigation/native";
import { View, Text, Button, SafeAreaView, TextInput, Pressable } from "react-native"
import { AppStackParamList } from "../../routers";
import { Ionicons } from "@expo/vector-icons";


type HomeProps = {
    navigation: NavigationProp<AppStackParamList>;
}

export const Home = ({ navigation }: HomeProps) => {
    return(
        <SafeAreaView>
            <View>
                <TextInput />
                <Pressable>
                    <Ionicons name="search" size={24}/>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};
