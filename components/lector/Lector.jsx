import React from "react"
import {View, Text, Pressable} from 'react-native'

const Lector = ({ruta, user}) => {

    return (
        <View>
            <Pressable
            onPress={()=>ruta(1)}>
                <Text>Ir atrás</Text>
            </Pressable>
            <Text>Yo soy el lector del libro</Text>
        </View>
    )
}

export default Lector