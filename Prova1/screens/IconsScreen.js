import {StyleSheet, View} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function IconsScreen() {
  return <>
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <MaterialIcons name="local-cafe" size={64} color="red" />
        <FontAwesome5 name="store-alt" size={64} color="green" />
        <MaterialIcons name="icecream" size={64} color="blue" />
      </View>
    </View>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  iconRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  }
})