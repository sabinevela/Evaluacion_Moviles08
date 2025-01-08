import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Informacion({ data }: { data: any }) {
  return (
    <View style={estilos.contenedorInfo}>
      <Text style={estilos.textoInfo}>Marca: {data.marca}</Text>
      <Text style={estilos.textoInfo}>Modelo: {data.modelo}</Text>
      <Text style={estilos.textoInfo}>Año: {data.año}</Text>
      <Text style={estilos.textoInfo}>Color: {data.color}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedorInfo: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  textoInfo: {
    fontSize: 16,
    color: '#333',
  },
});

