// src/screens/MyCommitmentsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const MY_APPOINTMENTS = [
  { id: '1', time: '09:30', description: 'Reunião "Daily"' },
  { id: '2', time: '14:00', description: 'Reunião com cliente Carros & Carros' },
  { id: '3', time: '16:30', description: 'Prazo final Projeto X' },
];

export default function MyCommitmentsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Nome + turma centralizados */}
      <View style={styles.headerBox}>
        <Text style={styles.name}>Túlio Teixeira</Text>
        <Text style={styles.classText}>Engenharia de Software</Text>
      </View>

      <Text style={styles.title}>Meus compromissos</Text>

      <FlatList
        data={MY_APPOINTMENTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  headerBox: {
    alignItems: 'center',
    marginBottom: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  classText: {
    fontSize: 16,
    color: '#555555',
    marginTop: 4,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  time: {
    width: 70,
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
  },
});
