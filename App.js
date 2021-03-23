/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
  
//Importar Librerias requeridas o componenetes
import React from 'react';
import { View, Text } from 'react-native';
import Header from './src/componentes/Header';
import DetalleMascotas from './src/componentes/DetalleMascotas';
import Item from './src/componentes/Item';
import ItemSeccion from './src/componentes/ItemSeccion';
import Button from './src/componentes/Button';
import ListaMascotas from './src/componentes/ListaMascotas';
//Cuerpo del Componente

const App=() => {
  return(
    <View style={{flex: 2,}}>
      <Header titulo={'Tienda De Perritos!'}/>
      <ListaMascotas/>
    </View>
  );
};

//Estilos



//Exportar Componente

export default App;

