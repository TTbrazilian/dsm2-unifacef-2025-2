import {StyleSheet, View, Text, Button} from 'react-native'

export default function HomeScreen({ navigation }) {
  return <>
    <View style={styles.container}>
      <Text style={styles.title}>
        Fausto Gonçalves Cintra
      </Text>
      <Button
        title="Imagem da Internet"
        onPress={() => navigation.navigate('Imagem da Internet')}
      />
      <Button
        title="Imagem local"
        onPress={() => navigation.navigate('Imagem local')}
      />
      <Button
        title="Ícones"
        onPress={() => navigation.navigate('Ícones')}
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
  title: {
    color: 'blue',
    fontSize: 20
  }
})