import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function PantallaBienvenida() {
  const navigation = useNavigation<any>();

  const manejarInicio = () => {
    navigation.navigate('BottomTab');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/11/e3/ab/11e3abe4ece9d9eb7e09d082799fc904.jpg' }}
      style={estilos.contenedor}
    >
      <View style={estilos.contenedorInterno}>
        <Text style={estilos.titulo}>SABINE VELA</Text>
        <Text style={estilos.subtitulo}>¡Bienvenidos!</Text>
        <TouchableOpacity style={estilos.boton} onPress={manejarInicio}>
          <Text style={estilos.textoBoton}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contenedorInterno: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 20,
    padding: 30,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  subtitulo: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  boton: {
    marginTop: 20,
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  textoBoton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});



