import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const ModalScreen = () => {

    const [visible, setVisible] = useState(false)

    return (
        <View style={styles.globalMargin}>

            <HeaderTitle title='Modal' />

            <Button
                title='Abrir Modal'
                onPress={() => { setVisible(true) }}
            />

            <Modal
                animationType='fade'
                visible={visible}
                transparent={true}
                       
            >
                {/* BACKGROUND NEGRO TRANSPARENTE */}
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {/* CONTENIDO DEL MODAL */}
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5,
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                        <Text style={{ fontSize: 20, fontWeight: '300', marginBottom: 20 }}> Cuerpo del modal </Text>
                        <Button
                            title='Cerrar Modal'
                            onPress={() => setVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
