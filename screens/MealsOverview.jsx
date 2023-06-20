import React, {useLayoutEffect} from 'react';
import {View, FlatList, StyleSheet} from "react-native";

import {MEALS, CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";

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


    function renderMealItem(itemData){
        return (
            <MealItem
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
                keyExtractor={meal => meal.id}
            />
        </View>
    );
}

export default MealsOverview;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    },
})