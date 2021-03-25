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
      color: '#222B32',
  } ,
  estiloView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(124,171,187,0.9)',
    textAlign: 'center',
    paddingTop: 1,
    paddingBottom: 3,
  },
  
};
//Exportar Componente
export default Header;