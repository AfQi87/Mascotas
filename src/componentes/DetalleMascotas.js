//Importar Librerias
import React from 'react';
import {View, Text, Image} from 'react-native';

import Item from './Item';

import ItemSeccion from './ItemSeccion';
import Button from './Button';

//Cuerpo del Componente

const DetalleMascotas = () => {
    return ( 
        <Item>
            <ItemSeccion>
                <View style={styles.estiloContenedor}>
                    <Text style={styles.estiloTexto}>Identificador</Text>
                    <Text style={styles.estiloTexto}>Nombre</Text>
                    <Text style={styles.estiloTexto}>Raza </Text>
                </View>
            </ItemSeccion>
            
            <ItemSeccion>
            <Image
                style={styles.estilosImagen}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
            />
            </ItemSeccion>
            
            <ItemSeccion>
                <Button/>
            </ItemSeccion>
        </Item>
     );   
}

//Estilos 
const styles = {
    estiloContenedor:{
        flexDireccion: "column",
        justifyContent: "space-between"
    },
    estilosImagen: {
        width:"100%",
        height: 300
    },
    estiloTexto:{
        fontSize: 18,
        fontWeight: '200',
        textTransform: 'uppercase',
    },
};

//Exportar Componente
export default DetalleMascotas;