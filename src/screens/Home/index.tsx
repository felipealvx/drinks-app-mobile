import { NavigationProp } from "@react-navigation/native";
import { View, Text, Button, SafeAreaView, TextInput, Pressable, FlatList, TouchableOpacity, Image } from "react-native"
import { AppStackParamList } from "../../routers";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";


type HomeProps = {
    navigation: NavigationProp<AppStackParamList>;
}

export const Home = ({ navigation }: HomeProps) => {
    const [ searchText, setSearchText ] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [drinks, setDrinks] = useState<Drink[]>([]);

    const fechData = async () => {
        if(searchText.length === 0){
            return;
        };
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
                // interpolar
            );

            const data = await response.json();

            setDrinks(data.drinks);

        } catch (error) {
            setErrorMessage("Error on drinking search, try again later.");
        }
    }

    return(
        <SafeAreaView style={{ flex: 1}}>
            <View style={{ padding: 20 }}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} 
                    placeholder="Input your drink name"
                    value={searchText}
                    onChangeText={setSearchText} />
                    <Pressable onPress={fechData} 
                    style={{ backgroundColor: 'dodgerblue', padding: 6, borderRadius: 4}}>
                        <Ionicons name="search" size={24} color={'white'}/>
                    </Pressable>
                </View>
                <FlatList
                data={drinks}
                keyExtractor={(item) => item.idDrink}
                renderItem={({item}) => (
                    <Pressable style={styles.drinkItemContainer}>
                        <Image source={{ uri: item.strDrinkThumb }} style={styles.drinkThumb} />
                        <View>
                            <Text>{item.strDrink}</Text>
                        </View> 
                    </Pressable>
                )}/>
            </View>
        </SafeAreaView>
    );
};
