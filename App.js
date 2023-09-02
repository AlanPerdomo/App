import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";

const DATA = [
  {
    title: "Pratos Principais",
    data: ["Filé de peixe", "Frango grelhado", "Risoto de camarão"],
  },
  {
    title: "Sobremesas",
    data: ["Sorvete", "Torta de morango", "Salada de frutas"],
  },
  {
    title: "Bebidas",
    data: ["Água mineral", "Coca cola", "Cerveja"],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>CARDÁPIO - Prof. Ediberto</Text>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.title + index.toString()}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  titulo: {
    fontSize: 40,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default App;
