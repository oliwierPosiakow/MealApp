import React, {useLayoutEffect} from 'react';
import {View, FlatList, StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons';

import {MEALS, CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";

function MealsOverview({route, navigation}) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter( (mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    },[])
    return (
        <MealsList items={displayedMeals}/>
    )
}
export default MealsOverview;
