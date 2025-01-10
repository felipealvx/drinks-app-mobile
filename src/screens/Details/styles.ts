import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export const styles = StyleSheet.create ({
    container: {
        paddingInline: 30,
        position: 'relative',
    },
    indicator: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
    },
    headerImage: {
        width: "100%",
        height: 250,
        alignItems: "center",
    },
    profile:{
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        right: 30,
        top: -30,
    },
    drinkName:{
        fontSize: 32,
        marginTop: 20,
        fontWeight: 600,
        color: "#282828",
        letterSpacing: 5,
    },
    category:{
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 2,
    },
    served:{
        fontSize: 12,
        marginBottom: 16,
    },
    sectionTitle:{
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 8,
    },
    ingredientItem:{},
    instructionsContent:{},

    buttonViewInfos: {
        width: '100%',
        padding: 20,
        backgroundColor: 'dodgerblue',
        marginVertical: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    textButton: {
        fontSize: 16,
        color: 'white',
        fontWeight: 700,
    },
    modal: {
        backgroundColor: '#F1F1F1',
        padding: 20,
        height: '50%',
        justifyContent: 'space-between',
        elevation: 50,
        borderTopWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 20,
        width: '100%',
    },
    textButtonCloseModal: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
    closModalButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5, 
        justifyContent: 'center'
    }
});