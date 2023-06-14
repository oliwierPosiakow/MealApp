import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import {useFonts} from "expo-font";

import AppLoading from "expo-app-loading";
import CategoriesScreen from "./screens/CategoriesScreen";

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
            <SafeAreaView style={styles.container}>
                <CategoriesScreen/>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});
