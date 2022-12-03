import React from 'react'
import { Button, View, Alert } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Estas viendo el titulo de la alerta",
            "Soy un subtitulo",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Presionaste CANCEL"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("Presionaste OK") },
                {
                    text: '3ERO', onPress: () => console.log("Presionaste 3er boton")
                }
            ],{
                cancelable: true
            }
        );


    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={'Alerta'} />

            <Button
                title='Mostrar alerta'
                onPress={showAlert}
            />
            

        </View>
    )
}
