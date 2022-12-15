import React, { useState } from 'react'
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { HeaderTitle } from '../components/HeaderTitle'

export const InfiniteScrollScreen = () => {


    const [numeros, setNumeros] = useState([0, 1, 2, 3, 4, 5])

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numeros.length + i
        }

        setTimeout(() => {
            setNumeros([...numeros, ...newArray]);
        }, 1500);
    }

    const renderItem = (item: number) => {
        return (
            <FadeInImage
                uri={`https://picsum.photos/id/${item}/1024/1024`}
                style={{
                    width: '100%',
                    height: 400,
                    
                }} />
        )
    }

    return (
        <View>
            <FlatList
                data={numeros}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={(
                    <View>
                        <HeaderTitle title='Infinite Scroll' />
                    </View>
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View style={{
                        height: 100,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator size={30} color='blue' style={{ borderWidth: 2, borderColor: 'yellow' }} />
                    </View>
                )}
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