import React from 'react'
import { Button, View, Alert } from 'react-native'
import prompt from 'react-native-prompt-android';
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
            ], {
            cancelable: true
        }
        );
    }

    const showPrompt = () => {

        prompt(
            'Soy el titulo de la Prompt',
            'Soy un subtitulo de la Prompt',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'default',
                cancelable: true,
                defaultValue: '',
                placeholder: 'Ingrese texto aquí'
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

            <View style={{ height: 10 }} />

            <Button
                title='Mostrar alerta'
                onPress={showPrompt}
            />


        </View>
    )
}
