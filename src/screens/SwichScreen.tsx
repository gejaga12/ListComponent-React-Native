import React, { useState } from 'react'
import { Platform, Switch, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';

export const SwichScreen = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={{ marginTop: 20 }}>

      <HeaderTitle title='Switches' />

      <Switch
        trackColor={{ false: "#D9D9DB", true: "#81b0ff" }}
        thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={ toggleSwitch }
        value={isEnabled}
      />


    </View>
  )
}
