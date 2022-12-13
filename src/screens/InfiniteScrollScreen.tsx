import React, { useState } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

export const InfiniteScrollScreen = () => {


    const [numeros, setNumeros] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numeros.length + i
        }
        setNumeros([...numeros, ...newArray]);
    }

    const renderItem = (item: number) => {

        return (
            <Text style={styles.textItem}>{item}</Text>
        )
    }

    return (
        <View>
            <FlatList
                data={numeros}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={<HeaderTitle title='Infinite Scroll' />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150,
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
    }
});