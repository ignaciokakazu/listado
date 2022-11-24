import React from "react";
import {View, Text, Pressable} from 'react-native';
import { styles } from "../Styles";

const Libro = () => {
    return (
        <View style={styles.container}>
            <Text>Ir atrás</Text>
            <Text>Título</Text>
            <Text>Autor</Text>
            <Text>Descripción</Text>
            <Text>Año</Text>
            <Pressable>
                <Text>Leer</Text>
            </Pressable>
            <Pressable>
                <Text>Favorito (agregar)</Text>
            </Pressable>
        </View>
    )
}

export default Libro