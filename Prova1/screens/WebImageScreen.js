import {StyleSheet, View, Button, Image} from 'react-native'

export default function WebImageScreen({ navigation }) {
  return <>
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG' }} 
        style={styles.image} />
    </View>
    <Button
      title="Voltar"
      onPress={() => navigation.goBack()}
    />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'tan'
  },
  image: {
    width: 400,
    height: 280
  }
})