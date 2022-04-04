import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainStack from './navigation/mainStack';


class App extends React.Component {
  render() {
    return (
      
        <SafeAreaView style={{ flex:1 }}>
           <MainStack/>
        </SafeAreaView>
    );
  }
}


export default App;
