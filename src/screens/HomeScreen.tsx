import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { menuItems } from '../data/MenuItems';
import { styles } from '../theme/appTheme';


export const HomeScreen = () => {
  
  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8,
        }}></View>
    );
  };

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={ menuItems }
        renderItem={({ item }) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={ item => item.name }
        ListHeaderComponent={ () => <HeaderTitle title='Opciones'/> }
        ItemSeparatorComponent={ itemSeparator }
      />
    </View>
  );
};
