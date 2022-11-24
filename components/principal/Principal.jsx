import React, { useEffect, useState } from "react"
import {View, Text, Pressable} from 'react-native';
import { styles } from "../Styles";
import Card from "./Card";
import Navbar from "../navbar/Navbar";
import Listado from "./Listado";

const Principal = ({ruta, user}) => {
    const [usuario, setUsuario] = useState(user)

    return (
        <View>
        <Navbar></Navbar>
        <View 
            style={styles.container}>

            <Text
            style={styles.h1}>{usuario}</Text>

            <Listado title='Últimos leídos'></Listado>
            <Listado title='Favoritos'></Listado>
            <Listado title='Más recientes'></Listado>

            <Text
            style={styles.h1}>Listado de libros</Text>

            <Pressable
            onPress={()=>{ruta(2)}}>
                <Text>Soy un libro</Text>
            </Pressable>
            <Card></Card>
        </View>
        </View>
    )
}

export default Principal