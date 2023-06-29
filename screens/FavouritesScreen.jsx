import React, {useContext} from 'react';
import {View, Text, StyleSheet} from "react-native";
import MealsList from "../components/MealsList";
import {MEALS} from "../data/dummy-data";
import { Entypo } from '@expo/vector-icons';
import {useSelector} from "react-redux";

function FavouritesScreen(props) {
    const favoriteMealsIds = useSelector((state) => {state.favoriteMeals.ids})

    const favouriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id))

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