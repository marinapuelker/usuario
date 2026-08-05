import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View,} from 'react-native';
import { TextInput } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconUsuario}>
          <Ionicons name="person-circle" size={50} color="#ffffff" />
        </View>
          </View>
      <View style={styles.boxInput}>
        <TextInput
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DDDD',
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height/11,
    backgroundColor: '#BC72DE',
    paddingHorizontal: 20,
    justifyContent: 'center',
    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.2)',
  },
  boxInput:{
    width: '90%',
    marginLeft: 10,
    marginTop: 30,
  },
  input: {
    borderRadius: 8,
    borderColor: 'white',
    height: 30,
    backgroundColor: 'white',
    marginBottom: 50,
    padding: 21,
  },
  iconUsuario: {
    padding: 380,
    marginTop: 10,
    marginLeft: 30

  }
});
