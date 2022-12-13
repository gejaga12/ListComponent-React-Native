import React, { useState } from 'react'
import { View, ScrollView, RefreshControl, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();
    const [refresing, setRefresing] = useState(false);
    const [data, setData] = useState<String>();

    const onRefresh = () => {
        setRefresing(true);

        setTimeout(() => {
            console.log('terminamos');
            setRefresing(false)
            setData('Hola crack')
        }, 3000);
    }

    return (
        <ScrollView style={{ marginTop: refresing ? top : 0 }}
            refreshControl={
                <RefreshControl
                    refreshing={refresing}              //Dato booleano del loading 
                    onRefresh={onRefresh}               //Funcion para que aparezca loading 
                    progressViewOffset={10}             //Posicion del loading
                    progressBackgroundColor="white"     //Color de fondo del loading
                    colors={['blue', 'yellow', 'blue']} //Colores del loading
                />
            }
        >
            <View style={styles.globalMargin}>

                <HeaderTitle title="Pull To Refresh" />

                <Text>{JSON.stringify(data)}</Text>

            </View>
        </ScrollView>
    )
}

