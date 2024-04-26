import { Text, View } from "react-native";
import { Button } from "react-native";

export default function HomePageScreen({ navigation }) {
    return (
        <View>
            <Text>Minha página inicial maravilhosa!</Text>

            <Button
                title="História"
                onPress={() => navigation.navigate("HistoriaScreen")}
            />

            <Button
                title="Sobre"
                onPress={() => navigation.navigate("SobreScreen")}
            />
            <Button
                title="Contato"
                onPress={() => navigation.navigate("ContatoScreen")}
            />
            <Button
                title="Produto"
                onPress={() => navigation.navigate("ProdutoScreen")}
            />
            <Button
                title="Celular"
                onPress={() => navigation.navigate("CelularScreen")}
            />

        </View>
    );
}
