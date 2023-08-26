import React, { useState } from 'react'; 
import { View, TextInput, Button, StyleSheet,Text } from 'react-native'; 

const Tela02 = () => { 
const [username, setUsername] = useState(''); 
const [password, setPassword] = useState(''); 
const handleLogin = () => {
    if (username === 'Alan' && password === '1234') {
        alert('Login bem-sucedido');
    } else {
        alert('Usuário e/ou Senha inválidos');
    }
};
return(
    <View style={[styles.container,{backgroundColor: 'lightblue'}]}>
        <Text style = {[styles.label1,{marginBottom: 50}]}>Sistema de cadastro de clientes</Text>
        <Text style = {[styles.label1,{marginBottom: 100}]}>tela de login</Text>
        <Text style = {styles.label1}>Usuário</Text>
        <View style = {styles.inputContainer1}>

        <TextInput 
            style={[styles.input,{width: 200, height: 40, backgroundColor: 'white', textAlign: 'center'}]} 
            placeholder='Nome de usuário' 
            value={username} 
            onChangeText={setUsername}
            />
            </View>
        <Text style={styles.label1}>Senha</Text>
        <TextInput 
            style={[styles.input,{width: 200, height: 40, backgroundColor:'white', textAlign: 'center', marginBottom: 10}]} 
            placeholder='Senha' 
            secureTextEntry value={password} 
            onChangeText={setPassword}
        />
    <Button title='Login' onPress={handleLogin} />
</View>
);};
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center', 
            padding: 20,
        },
        label1:{
            color: 'blue',
            fontSize: 18,
            fontFamily: 'Arial',
            fontWeight:'bold',
            marginBottom:5,
        },
        input: { 
            width: '20%', 
            padding: 10, 
            marginBottom: 10, 
            borderWidth: 1, 
            borderColor: '#ccc',
        },
        inputContainer1:{
            justifyContent:'center',
            alignItems: 'center',
            marginBottom:10,
        }
    });
export default Tela02; 