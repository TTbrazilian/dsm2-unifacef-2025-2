// App.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// --- TELA INICIAL ---
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Título principal */}
        <Text style={styles.title}>Agenda do dia</Text>

        {/* Nome + turma logo abaixo do título */}
        <View style={styles.nameBox}>
          <Text style={styles.name}>Tulio Teixeira</Text>
          <Text style={styles.classText}>Engenharia de Software</Text>
        </View>

        {/* Botões de navegação */}
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

// --- TELA MEUS COMPROMISSOS ---
const MY_APPOINTMENTS = [
  { id: '1', time: '09:30', description: 'Reunião "Daily"' },
  { id: '2', time: '14:00', description: 'Reunião com cliente Carros & Carros' },
  { id: '3', time: '16:30', description: 'Prazo final Projeto X' },
];

function MyCommitmentsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
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

// --- TELA COMPROMISSOS DA EQUIPE (AGRUPADO POR PESSOA) ---
const TEAM_MEMBERS = [
  {
    id: '1',
    name: 'Jurena (chefe)',
    appointments: [
      { id: '1', time: '09:30', description: 'Reunião "Daily"' },
      { id: '2', time: '10:30', description: 'Alinhamento com a diretoria' },
    ],
  },
  {
    id: '2',
    name: 'Aderbal',
    appointments: [
      { id: '3', time: '12:00', description: 'Almoço com cliente Carros & Carros' },
      { id: '4', time: '15:30', description: 'Saída para visita técnica' },
    ],
  },
  {
    id: '3',
    name: 'Equipe',
    appointments: [
      { id: '5', time: '14:00', description: 'Reunião com cliente Carros & Carros' },
      { id: '6', time: '16:30', description: 'Prazo final Projeto X' },
    ],
  },
];

function TeamCommitmentsScreen() {
  const renderMember = ({ item }) => (
    <View style={styles.memberBlock}>
      <Text style={styles.memberName}>{item.name}</Text>

      {item.appointments.map((appt) => (
        <View key={appt.id} style={styles.itemRow}>
          <Text style={styles.time}>{appt.time}</Text>
          <Text style={styles.description}>{appt.description}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.name}>Túlio Teixeira</Text>
        <Text style={styles.classText}>Engenharia de Software</Text>
      </View>

      <Text style={styles.title}>Compromissos da equipe</Text>

      <FlatList
        data={TEAM_MEMBERS}
        keyExtractor={(item) => item.id}
        renderItem={renderMember}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

// --- NAVEGAÇÃO ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="MyCommitments"
          component={MyCommitmentsScreen}
          options={{ title: 'Meus compromissos' }}
        />
        <Stack.Screen
          name="TeamCommitments"
          component={TeamCommitmentsScreen}
          options={{ title: 'Compromissos da equipe' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- ESTILOS COMPARTILHADOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
  },
  nameBox: {
    alignItems: 'center',
    marginBottom: 32,
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
  headerBox: {
    alignItems: 'center',
    marginBottom: 24,
  },
  memberBlock: {
    marginBottom: 24,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
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
