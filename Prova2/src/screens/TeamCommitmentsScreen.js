// src/screens/TeamCommitmentsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const TEAM_APPOINTMENTS = [
  { id: '1', time: '09:30', description: 'Reunião "Daily" - Jurena (chefe)' },
  { id: '2', time: '10:30', description: 'Alinhamento com a diretoria - Jurena (chefe)' },
  { id: '3', time: '12:00', description: 'Almoço com o cliente Carros & Carros - Aderbal' },
  { id: '4', time: '14:00', description: 'Reunião com cliente Carros & Carros - Equipe' },
  { id: '5', time: '15:30', description: 'Saída para visita técnica - Aderbal' },
  { id: '6', time: '16:30', description: 'Prazo final Projeto X - Equipe' },
];

export default function TeamCommitmentsScreen() {
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
        <Text style={styles.name}>Guilherme Borges</Text>
        <Text style={styles.classText}>Engenharia de Software</Text>
      </View>

      <Text style={styles.title}>Compromissos da equipe</Text>

      <FlatList
        data={TEAM_APPOINTMENTS}
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
