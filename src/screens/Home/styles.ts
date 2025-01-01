import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    header: {
        paddingTop: 60,
        backgroundColor: '#f3f3f3',
        borderWidth: 0.5,
        borderColor: 'gray',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 700,
        color: 'slategray',
        letterSpacing: 7,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    textInput: {
        borderWidth: 0.5,
        padding: 20,
        borderRadius: 50,
        borderColor: 'gray',
        flex: 1,
        height: 60,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: 'white'
    },
    searchButton: {
        height: 60,
        width: 60,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    clearButton: {
        position: 'absolute',
        right: 95,
    },
    drinkItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "white",
        marginInline: 20,
        marginBlock: 10,
        gap: 20,
        borderRadius: 15,
        height: 100,
    },
    drinkThumb: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    textContent: {
        flexDirection: 'row',
        padding: 10,
        gap: 5,
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        left: 175,
        top: 27,
    },
    drinkTitle: {
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 0,
    },
    textElements: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    errorMessage: {
        color: 'red',
        fontWeight: '600',
        textAlign: 'center',
        paddingBottom: 20
    },
    viewImage: {
        height: '100%',
        alignItems: 'center',
    },
    drinkImage: {
        height: 400,
        width: 400,
        position: 'absolute',
        top: 40
    },
});