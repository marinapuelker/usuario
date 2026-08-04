import react
 from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View,} from 'react-native';
import { TextInput } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bom dia, aluno!</Text>
    <View style={styles.boxInput}>

          <TextInput
            style={styles.input}
            placeholder='Pesquisar...'
          
        
            />
          </View>
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
  },
  greeting:{
    fontSize: 20,
    color: '#FFF',
    marginTop: 100,
  },
  boxInput:{
    width: '90%',
    marginTop: 20,
    marginLeft: 20,
  },
  input: {
    borderRadius: 3,
    borderColor: 'white',
    height: 30,
    backgroundColor: 'white',
  },
  //boxList:{
    //flex: 1,
   // width: '100%',
    //backgroundColor: 'red',
  //},

  //olaaaaaaa
});
