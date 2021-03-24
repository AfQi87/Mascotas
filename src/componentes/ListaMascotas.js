//Importar Librerias
import React,{ Component }  from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import DetalleMascotas from './DetalleMascotas';

//Cuerpo del Componente

class ListaMascotas extends Component{
    state = { listaperritos: [] };
    
   
    componentDidMount(){
        
        axios.get("http://192.168.100.15:8080/WSMASCOTAS/webresources/udenar.mascotas")
        .then((response)=>{
            this.setState({listaperritos: response.data });
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }
    listaMostrar = () =>{
        return this.state.listaperritos.map(mascotas => {
            return <DetalleMascotas key={mascotas.id} mascotas ={mascotas}></DetalleMascotas>
        });
    };
    render (){
        console.log(this.state);
        return <ScrollView>{this.listaMostrar()}</ScrollView> ;
    }   
}

//Estilos 

//Exportar Componente
export default ListaMascotas;