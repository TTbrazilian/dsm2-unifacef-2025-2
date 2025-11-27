import {Image, View, StyleSheet} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function GalleryScreen() {
  return <>
    <View style={styles.container}>
      <FontAwesome name="camera" size={64} color="orange" />
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/500px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg'}}
        style={styles.image}
      />
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Final_33a_Lliga_Catalana_AON_2021_LF_%28Foto_Ferran_Torn%C3%A9%29_%2851462803743%29.jpg/500px-Final_33a_Lliga_Catalana_AON_2021_LF_%28Foto_Ferran_Torn%C3%A9%29_%2851462803743%29.jpg'}}
        style={styles.image}
      />
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Europei_di_pallavolo_2005_-_Italia-Russia.jpg'}}
        style={styles.image}
      />
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
    width: 240,
    height: 240
  }
})