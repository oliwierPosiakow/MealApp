import React from 'react';
import {View, FlatList, StyleSheet} from "react-native";

import {MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverview({route}) {
    const category = route.params.categoryId

    const displayedMeals = MEALS.filter( (mealItem) => {
        return mealItem.categoryIds.indexOf(category) >= 0
    })

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