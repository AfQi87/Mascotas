//Importar Librerias
import React from 'react';
import {View, Text, Image, ProgressViewIOSComponent, Linking} from 'react-native';

import Item from './Item';

import ItemSeccion from './ItemSeccion';
import Button from './Button';

//Cuerpo del Componente

const DetalleMascotas = (props) => {
    return ( 
        <Item>
            <ItemSeccion>
                <View style={styles.estiloContenedor}>
                    <Text style={styles.estiloTexto}>{props.mascotas.id}.{props.mascotas.nombre} (Raza {props.mascotas.raza})</Text>                    
                </View>
            </ItemSeccion>
            
            <ItemSeccion>
            <Image 
                style={styles.estilosImagen}
                source={{
                    uri: props.mascotas.imagen,
                  }}
                
            />
            </ItemSeccion>
            
            <ItemSeccion>
                <Button boton={()=>
                            { Linking.openURL(props.mascotas.informacion) }
                        }/>
            </ItemSeccion>
        </Item>
     );   
}

//Estilos 
const styles = {
    estiloContenedor:{
        flexDireccion: "column",
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    estilosImagen: {
        width:"100%",
        height: 300
    },
    estiloTexto:{
        fontSize: 25,
        fontWeight: '200', 
        margin: 'auto',  
    },
    estiloLado: {
        fontSize: 25,
        fontWeight: '200',  
        marginTop: -35,
        marginLeft: 210,
    },
    estiloRaza: {
        fontSize: 15,
        fontWeight: '200',  
        
    }
};

//Exportar Componente
export default DetalleMascotas;