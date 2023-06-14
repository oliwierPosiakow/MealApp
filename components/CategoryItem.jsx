import React from 'react';
import {View, Pressable, Text, StyleSheet} from "react-native";

function CategoryItem({title, color}) {

    const backgroundColor = {backgroundColor: color}

    return (
        <View style={[styles.tile, backgroundColor]}>
            <Pressable>
                <View>
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
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 7,
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: .2,
    },
    tileText:{
        fontFamily: 'roboto-medium',
        fontSize: 16,
    }
})