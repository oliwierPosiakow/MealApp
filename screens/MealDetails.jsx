import React, {useContext, useLayoutEffect} from 'react';
import {Pressable, View, Text, Image, StyleSheet, ScrollView, Button} from "react-native";
import {MEALS} from "../data/dummy-data";
import meal from "../models/meal";
import { Entypo } from '@expo/vector-icons';
import NavigationButton from "../components/NavigationButton";

import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../store/redux/favorites";

function MealDetails({route, navigation}) {
    const id = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === id)
    const {
        title,
        imageUrl,
        duration,
        complexity,
        affordability,
        ingredients,
        steps,
    } = selectedMeal
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch()

    const mealIsFavorite = favoriteMealIds.includes(id)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Meal Details'
        })
    },[])

    function headerButtonHandler(){
        if(mealIsFavorite){
            dispatch(removeFavorite({id: id}))
        }
        else {
            dispatch(addFavorite({id: id}))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <NavigationButton icon={mealIsFavorite ? 'check' : 'save'} color={'#f5f5f5'} handler={headerButtonHandler}/>
            }
        })
    },[navigation, headerButtonHandler])

    return (
        <ScrollView style={styles.mealDetailsContainer}>
            <Text style={styles.mealTitle}>{title}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.mealImage} source={{uri: imageUrl}}/>
            </View>
            <View style={styles.mealDetailsWrapper}>
                <View style={styles.mealDetails}>
                    <Entypo name="time-slot" size={24} color="black" />
                    <Text>{duration} min</Text>
                </View>
                <View style={styles.mealDetails}>
                    <Entypo name="line-graph" size={24} color="black" />
                    <Text>{complexity}</Text>
                </View>
                <View style={styles.mealDetails}>
                    <Entypo name="credit" size={24} color="black" />
                    <Text>{affordability}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.sectionTitle}>Ingredients</Text>
                <View style={styles.textContainer}>
                    {ingredients.map((ingredient) => {
                        return <Text style={styles.sectionText} key={ingredient}>• {ingredient}</Text>
                    }) }
                </View>
            </View>
            <View>
                <Text style={styles.sectionTitle}>Steps</Text>
                <View style={styles.textContainer}>
                    {steps.map((step) => {
                        return <Text style={styles.sectionText} key={step}>• {step}</Text>
                    })}
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    mealDetailsContainer:{
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    mealTitle:{
        fontFamily: 'roboto-bold',
        fontSize: 24,
        marginVertical: 18,
        textAlign: "center"
    },
    mealImage:{
        width: '100%',
        height: 250,

    },
    imageContainer:{
        borderRadius: 7,
        overflow: "hidden"
    },
    mealDetailsWrapper:{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
        marginVertical: 16
    },
    mealDetails:{
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    sectionTitle:{
        fontFamily: 'roboto-medium',
        fontSize: 20,
    },
    textContainer:{
        gap: 10,
        marginVertical: 16,
    },
    sectionText:{
        fontFamily: 'roboto-regular',
        fontSize: 16,
    }
})