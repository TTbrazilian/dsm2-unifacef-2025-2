// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Nome + turma centralizados */}
      <View style={styles.centerBox}>
        <Text style={styles.name}>Túlio Teixeira</Text>
        <Text style={styles.classText}>Engenharia de Software</Text>
      </View>

      {/* "Agenda do dia" + botões */}
      <View style={styles.content}>
        <Text style={styles.title}>Agenda do dia</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MyCommitments')}
        >
          <Text style={styles.buttonText}>Meus compromissos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TeamCommitments')}
        >
          <Text style={styles.buttonText}>Compromissos da equipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  centerBox: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  classText: {
    fontSize: 16,
    marginTop: 4,
    color: '#555555',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 24,
  },
  button: {
    width: '80%',
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
  },
});
