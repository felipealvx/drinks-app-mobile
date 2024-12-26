import { NavigationProp } from "@react-navigation/native";
import { View, Text, SafeAreaView, TextInput, Pressable, FlatList, TouchableOpacity, Image } from "react-native"
import { AppStackParamList } from "../../routers";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";
import { useDrinks } from "../../hooks/useDrinks";


type HomeProps = {
    navigation: NavigationProp<AppStackParamList>;
}

export const Home = ({ navigation }: HomeProps) => {
    const [ searchText, setSearchText ] = useState("");

    const { fetchDrinks, error, drinks, clear } = useDrinks();

    const clearInput = () => {
        setSearchText("");
        clear();
    };

    const handleItemClick = (idDrink: string) => {
        navigation.navigate("Details", {
            drinkId: idDrink,
        });
    };

    return(
        <SafeAreaView style={{ flex: 1}}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Input your drink name"
                        value={searchText}
                        onChangeText={setSearchText} />
                    {searchText.length > 0 && (
                        <Pressable 
                            style={ styles.clearButton }
                            onPress={clearInput}>
                            <Ionicons name="close-outline" size={28}/>
                        </Pressable>
                    )}
                    <Pressable onPress={() => fetchDrinks(searchText)} 
                        style={{ backgroundColor: 'dodgerblue', padding: 6, borderRadius: 4}}>
                        <Ionicons name="search" size={24} color={'white'}/>
                    </Pressable>
                </View>
                {error && 
                    <Text style={styles.errorMessage}>
                        {error}
                    </Text>
                }
                <FlatList
                    data={drinks}
                    keyExtractor={(item) => item.idDrink}
                    renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => {handleItemClick(item.idDrink)}}
                        style={styles.drinkItemContainer}>
                        <Image 
                            source={{ uri: item.strDrinkThumb }} 
                            style={styles.drinkThumb} />
                        <View>
                            <Text>{item.strDrink}</Text>
                            <Text>{item.strAlcoholic === "Alcoholic"
                            ? "Alcoholic" 
                            : "Non-Alcoholic"}</Text>
                        </View> 
                    </TouchableOpacity>
                )}/>
        </SafeAreaView>
    );
};
