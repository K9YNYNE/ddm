import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
const numColumns = 2; // Número de colunas
const size = Dimensions.get('window').width / numColumns; // Tamanho das células
const App = () => {
  const compras = [
    { id: '1', title: 'Leite', comprado: true },
    { id: '2', title: 'Pão', comprado: false },
    { id: '3', title: 'Ovos', comprado: true },
    { id: '4', title: 'Café', comprado: false },
    { id: '5', title: 'Manteiga', comprado: true },
    { id: '6', title: 'Arroz', comprado: false },
    { id: '7', title: 'Feijão', comprado: false },
    { id: '8', title: 'Açúcar', comprado: true },
    { id: '9', title: 'Adicionar item' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
        <View style={styles.subt}><Text style={styles.gsubtitle}>
          <View style={styles.greenpoint}>•</View>verde para comprados<View style={styles.redpoint}>•</View>
          <View style={styles.redpoint}>•</View>vermelho para não para comprados<View style={styles.greenpoint}>•</View>
        </Text>
      </View>
      <FlatList
        data={compras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={item.comprado ? styles.itemComprado : styles.itemNaoComprado}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', // Fundo escuro
    paddingTop: 50,
    alignItems: 'center', // Centraliza os itens
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', // Cor do texto para contraste com fundo escuro
    marginBottom: 20,
  },
  gsubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green', // Cor do texto para contraste com fundo escuro
    marginBottom: 20,
  },
  rsubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green', // Cor do texto para contraste com fundo escuro
    marginBottom: 20,
  },
  itemComprado: {
    backgroundColor: '#4caf50', // Cor para itens comprados
    justifyContent: 'center',
    alignItems: 'center',
    width: 150, // Largura igual ao tamanho calculado
    height: 150, // Altura igual à largura para criar células quadradas
    margin: 10, // Margem entre as células
  },
  itemNaoComprado: {
    backgroundColor: '#f44336', // Cor para itens não comprados
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height:150,
    margin: 10,
  },
  greenpoint:{
    color:"green",
  },
  redpoint:{
    color:"red",
  },
  itemText: {
    fontSize: 18,
    color: '#fff', // Cor do texto dentro das células
  },
  subt:{
    backgroundColor:'gray',
    padding:14,
  }
});

export default App;
