//Importar Librerias
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

//Cuerpo del Componente

const Button = () => {
    return ( 
        <TouchableOpacity style={styles.estiloBoton}>
            <Text style={styles.estiloTexto}>Detalles</Text>
        </TouchableOpacity>
     );   
}

//Estilos 
const styles = {
    estiloTexto:{
        fontSize: 16,
        fontWeight: '400',
        paddingTop: 7,
        paddingBottom: 7,
        color: "black",
        textAlingn: 'center',
       

    },
    estiloBoton:{
        
        alignSelf: 'stretch',
        backgroundColor: '#BCE1EC',
        borderWidth: 2,
        paddingTop: 7,
        marginLeft: 7,
        marginRight: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },

}

//Exportar Componente
export default Button;