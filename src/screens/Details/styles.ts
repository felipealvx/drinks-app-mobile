import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        padding: 30,
    },
    indicator: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
    },
    headerImage: {
        width: "100%",
        height: 250,
        borderRadius: 12,
        alignItems: "center",
    },
    drinkName:{
        fontSize: 24,
        fontWeight: 600,
        color: "gray",
        textAlign: 'center',
        marginVertical: 8,
    },
    category:{
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 2,
    },
    served:{
        fontSize: 12,
        textAlign: "center",
        marginBottom: 16,
    },
    sectionTitle:{
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 8,
    },
    ingredientItem:{},
    instructionsContent:{},
});