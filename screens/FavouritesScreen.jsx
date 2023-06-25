import React, {useContext} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {FavoritesContext} from "../store/context/favoritesContext";
import MealsList from "../components/MealsList";
import {MEALS} from "../data/dummy-data";
import { Entypo } from '@expo/vector-icons';

function FavouritesScreen(props) {
    const favoriteMealsCtx = useContext(FavoritesContext)

    const favouriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))

    if(favouriteMeals.length === 0){
        return (
            <View style={styles.messageContainer}>
                <Text style={styles.message}>You have no favorites yet</Text>
                <Entypo name="emoji-sad" size={20} color="#afafaf" />
            </View>
        )
    }

    return (
        <MealsList items={favouriteMeals}/>
    )
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    messageContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    message:{
        fontFamily: 'roboto-medium',
        fontSize: 20,
        marginBottom: 10,
        color: '#afafaf'
    }
})