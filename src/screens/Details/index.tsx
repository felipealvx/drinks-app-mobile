import { RouteProp } from "@react-navigation/native"
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Modal, Alert } from "react-native"
import { useDrinkById } from "../../hooks/useDrinksById";
import { styles } from "./styles";
import { Entypo, FontAwesome5, FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

type DetailsScreenRouteProps = RouteProp<{
    Details: { drinkId: string; }},
    "Details"
>;

interface DetailsProp {
    route: DetailsScreenRouteProps;
}

export const Details: React.FC<DetailsProp> = ( {route} ) => {
    const {drink, error, loading} = useDrinkById(route.params.drinkId);
    const [modalVisible, setModalVisible] = useState(false);
    if (loading) {
        return (
            <View style={ styles.indicator }>
                <ActivityIndicator />
            </View>
        );
    }

    if(error){
        return (
            <View style={styles.indicator}>
                <Text>{error}</Text>
            </View>
        )
    }

    const ingredients = Array.from({ length: 15 }, (_, i) => ({
        ingredient: drink?.[`strIngredient${i+1}`] || "",
        measure: drink?.[`strMeasure${i+1}`] || "to taste", 
    })).filter((item) => item.ingredient);
    


    return(
        <ScrollView>
                <Image
                    source={{uri: drink?.strDrinkThumb}}
                    style={styles.headerImage} />
            
            <View style={styles.container}>
                <View style={styles.profile}>
                    {drink?.strAlcoholic === 'Alcoholic' ? (
                            <View><Entypo name="drink" size={30} color="#gray"/></View>
                        ) : (
                            <View><MaterialIcons name="no-drinks" size={30} color="#gray"/></View>
                        ) 
                    }
                </View>
                
                <View>
                    <Text style={styles.drinkName}>{drink?.strDrink}</Text>

                    <Text style={styles.category}>{drink?.strCategory} = {drink?.strAlcoholic}</Text>

                    <Text style={styles.served}>Served in: {drink?.strGlass}</Text>
                </View>

                <Text style={styles.sectionTitle}>Ingredients:</Text>

                {ingredients.map((item, index) => (
                    <Text key={index}>
                        {item.ingredient} - {item.measure}
                    </Text>
                ))}
                
                <TouchableOpacity style={styles.buttonViewInfos}
                onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textButton}>View Instructions</Text>
                    <FontAwesome5 name="info-circle" size={24} color="white" />
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}>
                        <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <View style={ styles.modal }>
                                <View>
                                    <Text style={styles.sectionTitle}>
                                        Instructions:
                                        <FontAwesome6 name="hands" size={24} color="black" />
                                    </Text>
                                    <Text>{drink?.strInstructions}</Text>
                                </View>
                                <TouchableOpacity style={styles.closModalButton}
                                onPress={() => setModalVisible(false)}>
                                    <Text style={styles.textButtonCloseModal}>Close</Text>
                                    <Ionicons name="close-outline" size={30} color={'red'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                </Modal>
            </View>
            
        </ScrollView>
    );
};