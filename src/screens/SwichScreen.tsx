import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwichScreen = () => {


  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  const { isActive, isHungry, isHappy } = state;

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value
    })
  }

  return (
    <View style={{ marginHorizontal: 20 }}>

      <HeaderTitle title='Switches' />

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Esta activo</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>


      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Tiene hambre</Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
      </View>


      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Esta feliz</Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
      </View>

      <View style={styles.divisor} />

      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5
  },
  divisor: {
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 10
  }
});
