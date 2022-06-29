import React from 'react'
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={require('./assets/incoveappLogo.png')}
        />
      <Text style={styles.logo}>SmartCardsApp®</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Usuario"
            placeholderTextColor="#868687"
            onChangeText={text => this.setState({ email: text })}
          />
      </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Contraseña" 
            placeholderTextColor="#868687"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <View style={styles.container2}>
        <TouchableOpacity>
          <Text style={styles.remember}>Recordar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.remember}>Recuperar contraseña</Text>
        </TouchableOpacity>
         </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
   container2: {
    backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: "row",
  },
    tinyLogo: {
    width: 83,
    height: 116,
  },
  logo:{
    fontWeight:"bold",
    fontSize:24,
    color:"#272728",
    marginBottom:40
  },
  inputView:{
    width:272,
    backgroundColor:"#E7E7E8",
    borderRadius:15,
    height:48,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#868687",
    fontSize:16
  },
  loginText:{
    color:"white",
    fontSize:16
  },
  remember: {
    color:"#868687",
    fontSize:14,
  },
  loginBtn:{
    width:272,
    backgroundColor:"#0381FF",
    borderRadius:15,
    height:48,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});