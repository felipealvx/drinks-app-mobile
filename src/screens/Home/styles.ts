import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        gap: 8,
    },
    textInput: {
        borderWidth: 0.5,
        padding: 8,
        borderRadius: 4,
        borderColor: 'gray',
        flex: 1,
    },
    clearButton: {
        position: 'absolute',
        right: 70,
    },
    drinkItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#f5f5f5",
        padding: 10,
        margin: 4,
        gap: 4,
    },
    drinkThumb: {
        width: 60,
        height: 60,
        borderRadius: 4,
    },
    errorMessage: {
        color: 'red',
        fontWeight: '600',
        textAlign: 'center',
        paddingBottom: 20
    },
});