import React from 'react';
import {View, Pressable, Text, StyleSheet, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";

function CategoryItem({id, title, color}) {
    const backgroundColor = {backgroundColor: color}
    const navigation = useNavigation()

    function onNavigate(){
        navigation.navigate('Meals Overview', {
            categoryId: id,
        })
    }

    return (
        <View style={styles.tile}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => {
                    return [
                        styles.button,
                        backgroundColor,
                        pressed ? styles.buttonPressed : null
                    ]
                }}
                onPress={onNavigate}
            >
                <View style={styles.innerButton}>
                    <Text style={styles.tileText}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryItem;

const styles = StyleSheet.create({
    tile:{
        flex: 1,
        margin: 16,
        height: 150,
        width: 150,
        borderRadius: 7,
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: .2,
        overflow: Platform.OS === 'android' ? "hidden" : 'visible',
    },
    button:{
        flex: 1,
        borderRadius: 7,
    },
    innerButton:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    buttonPressed:{
        opacity: .7,
    },
    tileText:{
        fontFamily: 'roboto-bold',
        fontSize: 16,
    }
})