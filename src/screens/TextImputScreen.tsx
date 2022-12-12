import React, { useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Text, } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

export const TextImputScreen = () => {

    const { form, onChange, isSuscribe } = useForm({
        nombre: '',
        email: '',
        telefono: '',
        isSuscribe: false,
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title='TextInputs' />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'nombre')}
                        />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                        />
       
                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>Esta activo</Text>
                            <CustomSwitch isOn={isSuscribe} onChange={( value ) => onChange( value, 'isSuscribe')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su telefono"
                            onChangeText={(value) => onChange(value, 'telefono')}
                            keyboardType="phone-pad"
                        />

                        <View style={{ height: 100 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: 10,
        height: 50,
        marginVertical: 10,
    },
    switchText: {
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
});