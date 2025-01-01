import { NavigationProp } from "@react-navigation/native";
import { View, Text, SafeAreaView, TextInput, Pressable, FlatList, TouchableOpacity, Image } from "react-native"
import { AppStackParamList } from "../../routers";
import { AntDesign, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";
import { useDrinks } from "../../hooks/useDrinks";
import DrinkImage from "../../../assets/drink.png";
import * as Animatable from 'react-native-animatable';

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
        <SafeAreaView style={{ flex: 1, gap: 10}}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>COCKTAILS LIST</Text>
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
                                <Ionicons name="close-outline" size={35} color={'gray'}/>
                            </Pressable>
                        )}
                        <TouchableOpacity onPress={() => fetchDrinks(searchText)} 
                            style={ styles.searchButton }>
                            <Ionicons name="search" size={24} color={'white'}/>
                        </TouchableOpacity>
                    </View>
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

                        <View style={ styles.textContent}>
                            <View>
                                <Text style={ styles.drinkTitle }>{item.strDrink}</Text>
                                <View style={styles.textElements}>
                                    <FontAwesome name="question-circle" size={16} color="gray" />
                                    <Text style={{color: "gray"}}>{item.strCategory}</Text>
                                </View>
                                <View style={ styles.textElements }>
                                    <Entypo name="drink" color={"gray"}/>
                                    <Text style={{color: "gray"}}>{item.strAlcoholic === "Alcoholic"
                                    ? "Alcoholic" 
                                    : "Non-Alcoholic"}
                                    </Text>
                                </View>
                            </View>
                            <Entypo name="chevron-right" size={30} color="gray" style={ styles.icon }/>
                        </View> 
                    </TouchableOpacity>
                )}/>
                {searchText.length === 0 && (
                    <View style={styles.viewImage}>
                    <Animatable.Image
                        source={require=(DrinkImage)} 
                        easing={"ease-out-back"}
                        animation="zoomInUp"
                        duration={3000} 
                        style={styles.drinkImage}
                    />
                 </View>
                )}
        </SafeAreaView>
    );
};
