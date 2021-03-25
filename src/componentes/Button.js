//Importar Librerias
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

//Cuerpo del Componente

const Button = (props) => {
    return ( 
        <TouchableOpacity onPress={props.boton} style={styles.estiloBoton}>
            <Text style={styles.estiloTexto}>información de Raza</Text>
        </TouchableOpacity>
     );   
}

//Estilos 
const styles = {
    estiloTexto:{
        fontSize: 16,
        fontWeight: '400',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 5,
        color: "black",
        textAlign: 'center',

    },
    estiloBoton:{
        alignSelf: 'stretch',
        backgroundColor: '#3EB9A7',
        borderWidth: 0,
        paddingTop: 5,
        paddingBottom: 7,
        marginLeft: 0,
        marginRight: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

}

//Exportar Componente
export default Button;