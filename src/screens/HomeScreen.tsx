import React, { useContext } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { menuItems } from '../data/MenuItems';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {
  
  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title='Opciones' />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};
