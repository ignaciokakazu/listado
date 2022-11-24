import React from "react";
import {View, Text, Pressable} from 'react-native';
import Card from "./Card";
import { styles } from "../Styles";

const Listado = ({title}) => {
    return (
        <View style={styles.listado}>
            <Text style={styles.h1}>{title}</Text>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </View>
    )
}

export default Listado