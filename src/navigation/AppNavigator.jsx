import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "../screens/HomePageScreen";
import SobrePageScreen from "../screens/SobrePageScreen";
import HistoriaPageScreen from "../screens/HistoriaPageScreen";
import ProdutoPageScreen from "../screens/ProdutoPageScreen";
import ContatoPageScreen from "../screens/ContatoPageScreen";
import CelularPageScreen from "../screens/CelularPageScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomePageScreen}
                    options={{
                        title: "Minha página inicial maravilhosa!✨"
                    }}
                />

                <Stack.Screen
                    name="SobreScreen"
                    component={SobrePageScreen}
                    options={{
                        title: "Minha Página do Sobre!✨"
                    }} />

                <Stack.Screen
                    name="HistoriaScreen"
                    component={HistoriaPageScreen}
                    options={{
                        title: "Minha Página da História!✨"
                    }}
                />
                <Stack.Screen
                    name="ContatoScreen"
                    component={ContatoPageScreen}
                    options={{
                        title: "Minha página do contato!✨"
                    }}
                />
                <Stack.Screen
                    name="CelularScreen"
                    component={CelularPageScreen}
                    options={{
                        title: "Minha página do Celular!✨"
                    }}
                />
                <Stack.Screen
                    name="ProdutoScreen"
                    component={ProdutoPageScreen}
                    options={{
                        title: "Minha página do Produto!✨"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}