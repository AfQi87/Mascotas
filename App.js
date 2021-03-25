/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
  
//Importar Librerias requeridas o componenetes
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Header from './src/componentes/Header';
import DetalleMascotas from './src/componentes/DetalleMascotas';
import Item from './src/componentes/Item';
import ItemSeccion from './src/componentes/ItemSeccion';
import Button from './src/componentes/Button';
import ListaMascotas from './src/componentes/ListaMascotas';
import Footer from './src/componentes/Footer';

//Cuerpo del Componente
const image = { uri: "https://image.freepik.com/vector-gratis/fondo-patron-huesos-huellas_1374-18.jpg" };
const App=() => {
  return(
   <View style={styles.container}> 
    <ImageBackground source={image} style={styles.image}>
      <Header titulo={'¡Tienda de Perritos!'}/>
      <Header titulo={'¡DogShop!'}/>
      <ListaMascotas/>
      <Footer titulo={'Anndony Quemag'}/>
      <Footer titulo={'Universidad de Nariño'}/>
      <Footer titulo={'Programación Avanzada 1'}/>
      </ImageBackground>
    </View>
  );
};

//Estilos
const styles  = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});


//Exportar Componente


export default App;

