import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useFonts} from "expo-font";

import AppLoading from "expo-app-loading";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";

const Stack = createNativeStackNavigator()

export default function App() {
    const [isLoaded] = useFonts({
        'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-medium' : require('./assets/fonts/Roboto-Medium.ttf'),
        'roboto-light' : require('./assets/fonts/Roboto-Light.ttf')
    })

    if(!isLoaded){
        return <AppLoading/>
    }

    return (
        <>
            <StatusBar style={"dark"}/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Meals Categories'}>
                    <Stack.Screen name={'Meals Categories'} component={CategoriesScreen}/>
                    <Stack.Screen name={'Meals Overview'} component={MealsOverview}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});
