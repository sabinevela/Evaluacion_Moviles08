import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { getDatabase, ref, get, set, remove } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

export default function PantallaEditarRegistro({ route }: { route: any }) {
  const [idRegistro, setIdRegistro] = useState(route.params?.id || '');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('');
  const [color, setColor] = useState('');
  
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (idRegistro) {
      const db = getDatabase();
      const referenciaRegistro = ref(db, 'autos/' + idRegistro);
      get(referenciaRegistro).then((snapshot) => {
        if (snapshot.exists()) {
          const registro = snapshot.val();
          setMarca(registro.marca);
          setModelo(registro.modelo);
          setAño(registro.año);
          setColor(registro.color);
        } else {
          Alert.alert('Error', 'No se encontró el registro con ese ID');
        }
      });
    }
  }, [idRegistro]);

  const manejarEdicion = () => {
    if (!marca || !modelo || !año || !color) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    const db = getDatabase();
    const referenciaRegistro = ref(db, 'autos/' + idRegistro);

    set(referenciaRegistro, {
      marca,
      modelo,
      año,
      color,
    })
      .then(() => {
        Alert.alert('Éxito', 'El registro ha sido editado.');
        navigation.goBack();
      })
      .catch(() => {
        Alert.alert('Error', 'Hubo un problema al editar el registro.');
      });
  };

  const manejarEliminacion = () => {
    Alert.alert(
      'Confirmar Eliminación',
      '¿Estás seguro de que deseas eliminar este registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            const db = getDatabase();
            const referenciaRegistro = ref(db, 'autos/' + idRegistro);
            remove(referenciaRegistro)
              .then(() => {
                Alert.alert('Eliminado', 'El registro ha sido eliminado.');
                navigation.goBack();
              })
              .catch(() => {
                Alert.alert('Error', 'Hubo un problema al eliminar el registro.');
              });
          },
        },
      ]
    );
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/7d/e0/ed/7de0ed522ba075f5d9a6431d81c63283.jpg' }} 
      style={estilos.contenedor}
    >
      <View style={estilos.contenedorInterno}>
        <Text style={estilos.titulo}>Editar Registro</Text>

        <TextInput
          style={estilos.input}
          placeholder="Marca"
          value={marca}
          onChangeText={setMarca}
        />
        <TextInput
          style={estilos.input}
          placeholder="Modelo"
          value={modelo}
          onChangeText={setModelo}
        />
        <TextInput
          style={estilos.input}
          placeholder="Año"
          value={año}
          onChangeText={setAño}
          keyboardType="numeric"
        />
        <TextInput
          style={estilos.input}
          placeholder="Color"
          value={color}
          onChangeText={setColor}
        />

        <TouchableOpacity style={estilos.boton} onPress={manejarEdicion}>
          <Text style={estilos.textoBoton}>Guardar Cambios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.boton} onPress={manejarEliminacion}>
          <Text style={estilos.textoBoton}>Eliminar Registro</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  boton: {
    marginTop: 10,
    backgroundColor: '#f7626c',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5,
  },
  textoBoton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

