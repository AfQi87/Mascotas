//Importar Librerias
import React from 'react';
import {View, Text} from 'react-native';

//Cuerpo del Componente

const ItemSeccion = (props) => {
    
    return ( 
        <View style={styles.estiloVista}> 
            {props.children}
        </View>
     );   
}

//Estilos 
const styles={
    estiloVista: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 5,
        flexDireccion: 'row',
        justifyContent: 'flex-start',
        position: 'relative',

    }
}

//Exportar Componente
export default ItemSeccion;