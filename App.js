import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View,} from 'react-native';
import { TextInput } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
    <View style={styles.boxInput}>

          <TextInput
            style={styles.input}
          
        
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
  boxInput:{
    width: '90%',
    marginLeft: 20,
    marginTop: 70,
  },
  input: {
    borderRadius: 8,
    borderColor: 'white',
    height: 30,
    backgroundColor: 'white',
    marginTop: 100,
    padding: 21,
  },
  //boxList:{
    //flex: 1,
   // width: '100%',
    //backgroundColor: 'red',
  //},

});
