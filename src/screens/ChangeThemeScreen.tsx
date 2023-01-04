import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

export const ChangeThemeScreen = () => {

    const { setDarkTime, setLightTime, theme: {colors} } = useContext(ThemeContext)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Cambiar Tema' />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                    onPress={setLightTime}
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}>
                    <Text style={{
                        color: 'white',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: 22,
                    }}>
                        Light
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={setDarkTime}
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}>
                    <Text style={{
                        color: 'white',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: 22,
                    }}>
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
