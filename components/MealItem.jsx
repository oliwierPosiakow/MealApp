import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

function MealItem({title, imageUrl, duration, complexity, affordability, id}) {

    const cost = affordability === 'affordable' ? '$' : affordability === 'luxurious' ? '$$$' : '$$'
    const navigation = useNavigation()
    function onNavigate(){
        navigation.navigate('Meal Details', {
            mealId: id,
            mealTitle: title
        })
    }

    return (
        <View style={styles.mealContainer}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => {
                   return [
                       pressed ? styles.buttonPressed : null
                   ]
               }}
                onPress={onNavigate}
            >
                <View style={styles.imageContainer}>
                    <Image style={styles.mealImage} source={{uri: imageUrl}}/>
                    <Text style={styles.mealTitle}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>{duration} min</Text>
                    <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsText}>{cost}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealContainer:{
        backgroundColor: '#e7e7e7',
        borderRadius: 7,
        overflow: "hidden",
        marginBottom: 15,
        padding: 10,
    },
    mealImage:{
        width: '100%',
        height: 200,
        borderRadius: 7,
    },
    imageContainer:{
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: .2,
    },
    mealTitle:{
        fontSize: 20,
        fontFamily: 'roboto-bold',
        marginTop: 15,
        textAlign: "center"
    },
    details: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "center"
    },
    detailsText:{
        fontFamily: 'roboto-light',
        marginHorizontal: 4,
        fontSize: 14,
    },
    buttonPressed:{
        opacity: .8,
    }
})