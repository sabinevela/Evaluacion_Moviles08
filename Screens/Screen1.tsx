import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
import { useNavigation } from '@react-navigation/native';

const firebaseConfig = {
  apiKey: "AIzaSyAlXesgUJ2uyognKAM6ZtvgxUSefOWcPyQ",
  authDomain: "prueba-163d0.firebaseapp.com",
  projectId: "prueba-163d0",
  storageBucket: "prueba-163d0.firebasestorage.app",
  messagingSenderId: "246584701043",
  appId: "1:246584701043:web:23754b25a50bb0b458ba06",
  measurementId: "G-MN5Z4NR6CS"
};

const app = initializeApp(firebaseConfig);

export default function Screen1() {
  const navigation = useNavigation<any>();

  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = () => {
    if (!marca || !modelo || !año || !color) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    const db = getDatabase();
    const autoId = Date.now().toString();

    set(ref(db, 'autos/' + autoId), {
      marca,
      modelo,
      año,
      color,
    })
    .then(() => {
      Alert.alert('¡Bien!', 'El registro a sido agregado:)', [
        { text: 'OK', onPress: () => navigation.navigate('Screen2') }
      ]);
      setMarca('');
      setModelo('');
      setAño('');
      setColor('');
    })
    .catch(() => {
      Alert.alert('¡Algo fallo!', 'Hubo un problema guardarse el registro:(');
    });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/1c/6a/df/1c6adfab7c0df74be435a9b55656a3c8.jpg' }}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Registra tu Auto!</Text>

        <TextInput
          style={styles.input}
          placeholder="Marca"
          value={marca}
          onChangeText={setMarca}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Modelo"
          value={modelo}
          onChangeText={setModelo}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Año"
          value={año}
          onChangeText={setAño}
          keyboardType="numeric"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Color"
          value={color}
          onChangeText={setColor}
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrar Auto</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
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
  title: {
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
  button: {
    marginTop: 10,
    backgroundColor: '#f7626c',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

