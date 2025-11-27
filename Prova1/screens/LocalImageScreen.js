import {StyleSheet, View, Image} from 'react-native'

export default function LocalImageScreen() {
  return <>
    <View style={styles.container}>
      <Image 
        source={require('../assets/chocolate.jpg')} 
        style={styles.image} />
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
  image: {
    width: 400,
    height: 280
  }
})