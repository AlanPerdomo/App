import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-web";

export default function App() {
  const [matricula, setMatricula] = useState(" ");
  const [nome, setNome] = useState(" ");
  const matInteira = () => {
    setMat(parseInt(matricula));
  };
  const showAlert = () => {
    window.alert("Cadastrado com sucesso!");
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

      <StatusBar style="auto" />
      <Button style={styles.button} title="Confirmar" onPress={showAlert} />
      <Button
        style={styles.button}
        title="Abrir URL"
        onPress={() =>
          Linking.openURL(
            "https://mediafiles.botpress.cloud/49c1a08e-ce38-4868-a0ea-01885747bba2/webchat/bot.html"
          )
        }
      />

      <Image
        style={styles.imagem}
        resizeMode="stretch"
        source={require("./image/em_manutencao_400x365.png")}
      />

      <ScrollView style={styles.ScrollView}>
        <Text style={styles.text}>
          Alan Perdomo e Silva - 202212004637 The scroll view displays its
          content within the scrollable content region. As the user performs
          platform-appropriate scroll gestures, the scroll view adjusts what
          portion of the underlying content is visible. ScrollView can scroll
          horizontally, vertically, or both, but does not provide zooming
          functionality. In the following example, a ScrollView allows the user
          to scroll through a VStack containing 100 Text views. The image after
          the listing shows the scroll view’s temporarily visible scrollbar at
          the right; you can disable it with the showsIndicators parameter of
          the ScrollView initializer. The scroll view displays its content
          within the scrollable content region. As the user performs
          platform-appropriate scroll gestures, the scroll view adjusts what
          portion of the underlying content is visible. ScrollView can scroll
          horizontally, vertically, or both, but does not provide zooming
          functionality. In the following example, a ScrollView allows the user
          to scroll through a VStack containing 100 Text views. The image after
          the listing shows the scroll view’s temporarily visible scrollbar at
          the right; you can disable it with the showsIndicators parameter of
          the ScrollView initializer.The scroll view displays its content within
          the scrollable content region. As the user performs
          platform-appropriate scroll gestures, the scroll view adjusts what
          portion of the underlying content is visible. ScrollView can scroll
          horizontally, vertically, or both, but does not provide zooming
          functionality. In the following example, a ScrollView allows the user
          to scroll through a VStack containing 100 Text views. The image after
          the listing shows the scroll view’s temporarily visible scrollbar at
          the right; you can disable it with the showsIndicators parameter of
          the ScrollView initializer.The scroll view displays its content within
          the scrollable content region. As the user performs
          platform-appropriate scroll gestures, the scroll view adjusts what
          portion of the underlying content is visible. ScrollView can scroll
          horizontally, vertically, or both, but does not provide zooming
          functionality. In the following example, a ScrollView allows the user
          to scroll through a VStack containing 100 Text views. The image after
          the listing shows the scroll view’s temporarily visible scrollbar at
          the right; you can disable it with the showsIndicators parameter of
          the ScrollView initializer.The scroll view displays its content within
          the scrollable content region. As the user performs
          platform-appropriate scroll gestures, the scroll view adjusts what
          portion of the underlying content is visible. ScrollView can scroll
          horizontally, vertically, or both, but does not provide zooming
          functionality. In the following example, a ScrollView allows the user
          to scroll through a VStack containing 100 Text views. The image after
          the listing shows the scroll view’s temporarily visible scrollbar at
          the right; you can disable it with the showsIndicators parameter of
          the ScrollView initializer.The scroll view displays its content within
          the scrollable content region. As the user performs
          platform-appropriate scroll gestures, the scroll view adjusts what
          portion of the underlying content is visible. ScrollView can scroll
          horizontally, vertically, or both, but does not provide zooming
          functionality. In the following example, a ScrollView allows the user
          to scroll through a VStack containing 100 Text views. The image after
          the listing shows the scroll view’s temporarily visible scrollbar at
          the right; you can disable it with the showsIndicators parameter of
          the ScrollView initializer.The scroll view displays its content within
          the scrollable content region. As the user performs
          platform-appropriate scroll gestures, the scroll view adjusts what
          portion of the underlying content is visible. ScrollView can scroll
          horizontally, vertically, or both, but does not provide zooming
          functionality. In the following example, a ScrollView allows the user
          to scroll through a VStack containing 100 Text views. The image after
          the listing shows the scroll view’s temporarily visible scrollbar at
          the right; you can disable it with the showsIndicators parameter of
          the ScrollView initializer.
        </Text>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    maxWidth: 740,
    position: "absolute",
    padding: "auto",
    alignItems: "center",
    justifyContent: "center",
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
  text: {
    marginLeft: 10,
  },
});
