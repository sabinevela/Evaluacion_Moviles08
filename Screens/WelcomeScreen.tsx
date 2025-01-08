import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
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
        <Text style={estilos.titulo}>BIENVENIDOS</Text>
        <Text style={estilos.subtitulo}>Sabine Vela</Text>
        <Text style={estilos.subtitulo}>Evaluacion Moviles</Text>
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
    borderRadius: 25,
    padding: 40,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.35,
    shadowRadius: 15,
    elevation: 8,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  subtitulo: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    fontStyle: 'italic',
  },
  boton: {
    marginTop: 25,
    backgroundColor: '#d02c37',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 50,
    elevation: 12,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  textoBoton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});




