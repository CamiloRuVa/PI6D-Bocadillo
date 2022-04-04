import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenRegistro = ( {navigation} ) => {
  return (
      
    <View style={styles.mainContainer}>
      <View style={styles.backContainer}>
        <Text style={styles.titulo}>Registrate</Text>        
        
        <Text style={styles.subtitulo}>Nombre</Text>
        <View style={styles.container}>
          <TextInput style={styles.Input} placeholder='Nombre'/>
          <Icon name="vcard" size={30} color="#999" />  
        </View>

        <Text style={styles.subtitulo}>Correo</Text>
        <View style={styles.container}>
          <TextInput style={styles.Input} placeholder='Correo'/>
          <Icon name="user" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Contraseña</Text>
        <View style={styles.container}>
          <TextInput style={styles.Input} secureTextEntry={true} placeholder='Contraseña'/>
          <Icon name="key" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Repita la Contraseña</Text>
        <View style={styles.container}>
          <TextInput style={styles.Input} secureTextEntry={true} placeholder='Repetir Contraseña'/>
          <Icon name="key" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Fecha de Nacimiento</Text>
        <View style={styles.container}>
          <TextInput style={styles.Input} placeholder='00/00/00'/>
          <Icon name="calendar" size={30} color="#999"  /> 
        </View>

        
        <Button title='Crear Cuenta' style={styles.mainBoton} onPress = { () => { navigation.navigate('Inicio') }} color='#cb0519'/>

        <Text style={styles.textoSecundario}><Text style={{color: '#cb0519'}} onPress = { () => { navigation.navigate('Inicio') }}>Iniciar Sesión</Text></Text>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#CDCDCD'
  },
  backContainer:{
    backgroundColor:'white',
    margin: 10,
    padding: 20,
    borderColor:'black',
    borderWidth:2,
    borderRadius:10
  },
  container: {
    flexDirection:'row',
    borderColor: 'black',
    borderWidth: 1,
    height:40,
    marginBottom:20
  },
  mainBoton: {
    color:'#cb0519',
    width:1,
  },
  titulo:{
    fontSize:20,
    color:'black',
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:10
  },
  subtitulo:{
    fontSize:15,
    color:'black',
    padding:5
  },
  textoSecundario:{
    textAlign:'center',
    marginTop:10,
  },
  Input:{
    width:'90%'
  }, 
});

export default ScreenRegistro;
