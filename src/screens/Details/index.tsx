import { RouteProp } from "@react-navigation/native"
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from "react-native"
import { useDrinkById } from "../../hooks/useDrinksById";
import { styles } from "./styles";
import { Entypo, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

type DetailsScreenRouteProps = RouteProp<{
    Details: { drinkId: string; }},
    "Details"
>;

interface DetailsProp {
    route: DetailsScreenRouteProps;
}

export const Details: React.FC<DetailsProp> = ( {route} ) => {
    const {drink, error, loading} = useDrinkById(route.params.drinkId);
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

                {ingredients.map(({ ingredient, measure }, index) => (
                    <Text key={index}>
                        {ingredient} - {measure}
                    </Text>
                ))};

                <TouchableOpacity style={styles.buttonViewInfos}
                
                >
                    <Text style={styles.textButton}>View Instructions</Text>
                    <FontAwesome5 name="info-circle" size={24} color="white" />
                </TouchableOpacity>
                {/* <Text style={styles.sectionTitle}>Instructions:</Text>
                <Text>{drink?.strInstructions}</Text> */}
            </View>
            
        </ScrollView>
    );
};