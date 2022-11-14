import React, { useState } from "react";
import { TextInput } from "react-native";
import { View, Button } from "react-native";

export const Search = () => {
    const [searchText, setSearch] = useState('')

    const setSearchInput = (t)=> {
        setSearch(t)
        console.log(t)
    }

    const buscar = () => {
        console.log('se va a buscar ' + searchText)
    }

    return (
        <View>
      <TextInput
        //style={styles.input}
        onChangeText={setSearchInput}
        value={searchText}
        placeholder="Escriba un texto para buscar"
      />
      <Button 
        title="Buscar"
        onPress={buscar}
      />
        </View>
    )
}