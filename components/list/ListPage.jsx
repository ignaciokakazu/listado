import React, { useEffect, useState } from "react";
import { View, Button, FlatList, StyleSheet, ScrollView, Text } from "react-native";
import { DATA } from "../../data";
import {ListEmpty} from './ListEmpty';
import RenderItems from "./RenderItems";

const ListPage = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(()=>{
    setData(DATA);
  }, [])

  const enviar = () => {
    console.log(data);
  };

  const eliminar = () => {
    console.log("eliminar de ListPage");
    const result = data.filter((item) => id !== item.id);
    setData(data);
  };

  const guardar = (newData) => {
    console.log("guardar de ListPage");
    setData(newData);
  };

  const mostrarModal = () => {
    setModal(!modal);
  };

  const agregar = () => {
    // console.time()
    
    const result = data;
    result.push({
      id: data.length,
      nombre: 'nuevo ' + data.length,
      precio: 10,
      cantidad: 1
    })
    alert('Se agregó un producto random: nuevo ' + data.length)
    setData(result)
    console.log(data)
    // console.timeEnd()
  }

  return (
    <View style={styles.container}>

      <Button onPress={agregar} title="Agregar item random al carrito"/>
      {/* </Modal> */}
      <Button title="Enviar" onPress={enviar} />

      <FlatList
        data={data}
        renderItem={RenderItems}
        keyExtractor={(item) => item.id}
        initialNumToRender={4}
        extraData={data}
        persistentScrollbar={true}
        ListEmptyComponent={ListEmpty}
        ListHeaderComponent={() => (
          <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
          Listado de compras
          </Text>
      )}
      ListFooterComponent={() => (
          <Text style={{ fontSize: 30, textAlign: "center",marginBottom:20,fontWeight:'bold' }}>Gracias por comprar</Text>
      )}
      />
      {/* <Button onPress={mostrarModal} title="Nuevo item"></Button> */}
      {/* <Modal animationType="slide" visible={modal}> */}
    </View>
  );
};

export default ListPage;

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    marginLeft: 50,
    marginRight: 50,
    heigth: '100%'
  },
});
