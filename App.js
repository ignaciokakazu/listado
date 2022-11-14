import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import ListPage from './components/list/ListPage';
import { useContext, useState, createContext } from 'react';
import { DATA } from './data';

/*
  Preguntar:
  Item importa DATA y hace push de elementos.
  Es necesario hacer un useState de DATA que se encuentra
  en App. 

*/


const App = () => {
  const [data, setData] = useState(DATA);

  return (
    <View>
      <ListPage/>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default App;