import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useFonts} from "expo-font";
import { Entypo } from '@expo/vector-icons';

import AppLoading from "expo-app-loading";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
function DrawerNav(){
    return (
        <Drawer.Navigator screenOptions={{
            title: 'All Categories',
            headerStyle: { backgroundColor: '#1c1c1c'},
            headerTintColor: '#f5f5f5',
            drawerContentStyle: {backgroundColor: '#1c1c1c'},
            drawerInactiveTintColor: '#f5f5f5',
            drawerActiveTintColor: '#1c1c1c',
            drawerActiveBackgroundColor: '#cbcbcb',
        }}>
            <Drawer.Screen name={'Categories'} component={CategoriesScreen} options={{
                title: 'Categories',
                drawerIcon: ({size, color }) => <Entypo name="archive" size={size} color={color} />
            }}/>
            <Drawer.Screen name={'Favourites'} component={FavouritesScreen} options={{
                title: 'Favourites',
                drawerIcon: ({size, color}) => <Entypo name="star" size={size} color={color}/>
            }}
            />
        </Drawer.Navigator>
    )
}

export default function App() {
    const [isLoaded] = useFonts({
        'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-medium' : require('./assets/fonts/Roboto-Medium.ttf'),
        'roboto-light' : require('./assets/fonts/Roboto-Light.ttf')
    })

    if(!isLoaded){
        return <AppLoading/>
    }

    return (
        <>
            <StatusBar style={"light"}/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Meals Categories'} screenOptions={{
                    title: 'All Categories',
                    headerStyle: { backgroundColor: '#1c1c1c'},
                    headerTintColor: '#f5f5f5',
                }}>

                    <Stack.Screen
                        name={'Drawer'}
                        component={DrawerNav}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name={'Meals Overview'}
                        component={MealsOverview}
                    />
                    <Stack.Screen
                        name={'Meal Details'}
                        component={MealDetails}
                    />
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
