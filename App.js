import react
 from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View,} from 'react-native';
import { TextInput } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <text style={styles.greeting}>Bom dia, aluno!</text>
        <View style={styles.boxInput}>

          <input
            style={styles.input}
            placeholder='Pesquisar...'
          
        
            />
          </View>
        <View style={styles.boxList}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height/6,
    backgroundColor: '#BC72DE',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  greeting:{
    fontSize: 20,
    color: '#FFF',
    marginTop: 20,
  },
  boxInput:{
    width: '80%',
  },
  //boxList:{
    //flex: 1,
   // width: '100%',
    //backgroundColor: 'red',
  //},
});
