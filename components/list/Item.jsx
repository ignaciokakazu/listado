import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useState } from "react";

const Item = ({ props }) => {
  const [modal, setModal] = useState(false);
  const [cant, setCant] = useState(props.cantidad);
  const [total, setTotal] = useState(props.precio * props.cantidad);

  const eliminarItem = () => {
    console.log("eliminarItem", props.id);
    console.log("modal", modal);
    setModal(true);
  };

  const eliminarConfirmar = () => {
    console.log('acá debería eliminar el item de id ' + props.id);
    setModal(false);
  };

  const eliminarCancelar = () => {
    console.log("cancelar");
    setModal(false);
  };

  const agregarCantidad = () => {
    const agregar = cant + 1;
    setCant(agregar);
    setTotal(agregar * props.precio);
  };

  const quitarCantidad = () => {
    if (cant > 1) {
      const quitar = cant - 1;
      setCant(quitar);
      setTotal(quitar * props.precio);
    } else {
      eliminarItem();
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{props.nombre}</Text>
      <Text>$ {props.precio}</Text>
      <Text>Cantidad {cant}</Text>
      <TouchableOpacity style={styles.btnContador} onPress={agregarCantidad}>
        <Text>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnContador} onPress={quitarCantidad}>
        <Text>-1</Text>
      </TouchableOpacity>
      <Text>Total: $ {total}</Text>
      <TouchableOpacity style={styles.btnEliminar} onPress={eliminarItem}>
        <Text>Eliminar item</Text>
      </TouchableOpacity>

      {/* a partir de acá está el modal */}

      <Modal animationType="slide" visible={modal}>
        <Text>Desea eliminar {props.nombre}?</Text>
        <TouchableOpacity style={styles.btnEliminar} onPress={eliminarConfirmar}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEliminar} onPress={eliminarCancelar}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    color: "red",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "thistle",
  },
  nombre: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  btnContador: {
    width: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  btnEliminar: {
    width: 150,
    borderWidth: 2,
    borderColor: "black",
    marginTop: 20
  }
});

export default Item;
