import React from "react";
import { View, FlatList, StyleSheet, Button, ActivityIndicator } from "react-native";
import { useState } from "react";
import Login from "./components/login/Login";
import Principal from "./components/principal/Principal";
import Lector from "./components/lector/Lector";
import { useFonts } from "expo-font";
import Colors from "./constants/Colors";
/* route maneja la navegación
   0: login
   1: página principal
   2: lector de libros
*/

const App = () => {
  const [route, setRoute] = useState(0);
  const [libro, setLibro] = useState('url del libro');
  const [user, setUser] = useState('');
  const [loaded] = useFonts({
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-SemiBold.ttf')
  })


  const setearRuta = (ruta) => {
    console.log("setearRuta", "este metodo fue enviado desde App para persistir el estado de ruta");
    setRoute(ruta);
    console.log("ruta", ruta);
    console.log("ruta", "modifica la pantalla");
  };

  const setearUsuario = (usuario) => {
    console.log("setearUsuario", "este metodo fue enviado desde App para persistir el estado de ruta");
    
    setUser(usuario)
    console.log('user', user)
  }

  let contenido = <Login ruta={setearRuta} setearUsuario={setearUsuario}></Login>
  
  if (!loaded) { contenido = <ActivityIndicator size='large' color={Colors.primary}/>}

  if (route === 1) {
      contenido = <Principal ruta={setearRuta} user={user}></Principal>;
  }

  if (route === 2) {
    contenido = <Lector ruta={setearRuta} user={user}></Lector>
  }

  return <View>{contenido}</View>;
};

const styles = StyleSheet.create({});

export default App;
