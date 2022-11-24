import React from "react";
import {View, Text, Pressable} from 'react-native';
import { styles } from "../Styles";

const Card = ({titulo, autor, ruta}) => {
    return (
        <Pressable style={styles.card}>
            <Text style={styles.cardText}>Título</Text>
            <Text style={styles.cardTextAutor}>Autor</Text>
        </Pressable>
    )
}

export default Card