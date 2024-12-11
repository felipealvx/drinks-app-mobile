import { View, Text, Button } from "react-native"

export const Home = ({ navigation }) => {
    return(
        <View style={{ backgroundColor: "red" }}>
            <Text>Minha Home</Text>
            <Button title="Clique Aqui" onPress={() => navigation.navigate("Details")} />
        </View>
    )
}