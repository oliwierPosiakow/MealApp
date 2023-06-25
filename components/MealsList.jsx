import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "./MealItem";


function MealsList({items}) {
    function renderMealItem(itemData){
        return (
            <MealItem
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                id={itemData.item.id}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderMealItem}
                keyExtractor={meal => meal.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    },
})