import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert, ImageBackground } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database';
import Informacion from './Informacion';

export default function PantallaBuscarRegistro() {
  const [idRegistro, setIdRegistro] = useState<string>('');
  const [registro, setRegistro] = useState<any | null>(null);
  const [listaRegistros, setListaRegistros] = useState<any[]>([]);

  const buscarRegistroPorId = () => {
    const db = getDatabase();
    const referenciaRegistro = ref(db, 'autos/' + idRegistro);

    get(referenciaRegistro).then((snapshot) => {
      if (snapshot.exists()) {
        setRegistro(snapshot.val());
      } else {
        Alert.alert('Error', 'No se encontró el registro con ese ID');
      }
    });
  };

  useEffect(() => {
    const obtenerRegistros = () => {
      const db = getDatabase();
      const referenciaRegistros = ref(db, 'autos');

      get(referenciaRegistros).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const registrosArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          setListaRegistros(registrosArray);
        }
      });
    };

    obtenerRegistros();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => Alert.alert('Información', `Marca: ${item.marca}\nModelo: ${item.modelo}`)}>
      <Text style={estilos.itemLista}>{item.marca}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/c9/7d/6a/c97d6a77305b8b20aeca9bf65b85164d.jpg' }} 
      style={estilos.contenedor}
    >
      <TextInput
        style={estilos.input}
        placeholder="Ingresa el ID"
        value={idRegistro}
        onChangeText={setIdRegistro}
      />
      <TouchableOpacity style={estilos.boton} onPress={buscarRegistroPorId}>
        <Text style={estilos.textoBoton}>Encuentra tu Registro!</Text>
      </TouchableOpacity>

      {registro && <Informacion data={registro} />}

      <FlatList
        data={listaRegistros}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
  },
  boton: {
    backgroundColor: '#d02c37',
    padding: 10,
    borderRadius: 5,
  },
  textoBoton: {
    color: '#fff',
    textAlign: 'center',
  },
  itemLista: {
    fontSize: 18,
    padding: 10,
    color: '#fff',  
  },
});

