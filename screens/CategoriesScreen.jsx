import React from 'react';
import {View, FlatList, StyleSheet} from "react-native";

import {CATEGORIES} from '../data/dummy-data'
import CategoryItem from "../components/CategoryItem";

function CategoriesScreen({navigation}) {
    return (
        <View style={styles.categoriesContainer}>
            <FlatList
                data={CATEGORIES}
                renderItem={(item)=>{
                    return <CategoryItem id={item.item.id} title={item.item.title} color={item.item.color} />
                }}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    categoriesContainer:{
        flex:1
    }
})