import React from 'react';
import {View, Pressable, Text, StyleSheet} from "react-native";

function CategoryItem({title, color}) {

    const backgorundColor = {backgroundColor: color}

    return (
        <View style={[styles.tile, backgorundColor]}>
            <Pressable>
                <View>
                    <Text>{title}</Text>
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
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 7,
    }
})