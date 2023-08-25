import React, { useState } from 'react'; 
import { View, TextInput, Button, StyleSheet } from 'react-native'; 

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
    <View style={styles.container}>
        <TextInput 
            style={styles.input} 
            placeholder='Nome de usuário' 
            value={username} 
            onChangeText={setUsername}
        />
        <TextInput 
            style={styles.input} 
            placeholder='Senha' 
            secureTextEntry value={password} 
            onChangeText={setPassword}
        />
    <Button title='Login' onPress={handleLogin} />
</View>
);};
    const styles = StyleSheet.create({container: {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,},
    input: { width: '100%', padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ccc',},
});
export default Tela02; 