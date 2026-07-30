import react
 from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <text style={styles.greeting}>Bom dia, Marina.</text>
        <input 
        
        />
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
    justifyContent: 'center',
  }
});
