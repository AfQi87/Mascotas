//Importar Librerias
import React from 'react';
import {View, Text} from 'react-native';

//Cuerpo del Componente

const Header = (props) => {
    const {estiloTexto, estiloView}=styles;
    
    return ( 
        <View style={estiloView}>
            <Text style={estiloTexto}>{props.titulo }</Text>
        </View>
     );   
}

//Estilos 

const styles = {
  estiloTexto: {
      fontSize: 25,
      color: '#0FBCF3',
  } ,
  estiloView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    textAlingn: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  
};
//Exportar Componente
export default Header;