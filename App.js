import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-web";

export default function App() {
  const [matricula, setMatricula] = useState(" ");
  const [nome, setNome] = useState(" ");
  const matInteira = () => {
    setMat(parseInt(matricula));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>Sistema de cadastramento de clientes.</Text>
      <Text style={styles.display1}>Entrada de dados.</Text>
      <Text style={styles.display2}>Matricula</Text>

      <TextInput
        style={styles.matricula}
        value={String(matricula)}
        onChangeText={(texto) => setMatricula(texto)}
      ></TextInput>

      <Text style={styles.display2}>Nome</Text>

      <TextInput
        style={styles.nome}
        value={String(nome)}
        onChangeText={(texto) => setNome(texto)}
      ></TextInput>

      <Image
        style={styles.imagem}
        resizeMode="stretch"
        source={require("./image/em_manutencao_400x365.png")}
      />

      <ScrollView style={styles.ScrollView}>
        <Text style={styles.text}>Alan Perdomo e Silva - 202212004637</Text>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
  },
  display: {
    marginLeft: 20,
    marginTop: 50,
  },
  display1: {
    marginLeft: 60,
  },
  display2: { marginLeft: 10, marginTop: 10 },
  matricula: {
    backgroundColor: "#FFF",
    borderEndWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 2,
  },
  nome: {
    backgroundColor: "#FFF",
    borderEndWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 2,
  },
  imagem: {
    width: 240,
    height: 240,
    margin: 10,
  },
  text:{
    marginLeft: 10
  }
});
