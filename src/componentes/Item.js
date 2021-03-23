//Importar Librerias
import React from 'react';
import {View, Text} from 'react-native';

//Cuerpo del Componente

const Item = (props) => {
    return ( 
        <View style={styles.estiloVista}> 
            {props.children}
        </View>
     );   
} 

//Estilos 
const styles={
    estiloVista: {
        borderWidth: 1,
        borderColor: '#13A2D0',
        borderBottomWidth: 0,
        shadowColor: 'black',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
};

//Exportar Componente
export default Item;