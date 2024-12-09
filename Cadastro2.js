import React from 'react';
import { View, Text } from 'react-native';
import { View,Text, TextInput,TouchableOpacity, StyleSheet, Image, Alert, ScrollView,Dimensions, } from 'react-native';
const { width, height } = Dimensions.get('window');


const Cadastro2  = () => {
  const handleConcluir = () => {
    // Lógica para concluir
    fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'Teste',
     }),
})
.then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Alert.alert('Sucesso', 'Ação concluída com sucesso!');
        } else {
          Alert.alert('Erro', 'Ocorreu um erro ao processar sua solicitação.');
        }
      })
      .catch(() => Alert.alert('Erro', 'Falha ao se conectar ao servidor.'));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={{ uri: 'https://via.placeholder.com/95x90' }}
        />
      </View>

      <View style={styles.form}>
        <View style={styles.card}>
          <Text style={styles.title}>Adicione uma foto da sua bela casa</Text>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://via.placeholder.com/49x52' }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Endereço da Casa</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o endereço"
            placeholderTextColor="#ccc"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleConcluir}>
            <Text style={styles.buttonText}>Concluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E7E7E8',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    width: '100%',
    backgroundColor: '#1448A1',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerImage: {
    width: 95,
    height: 90,
    borderRadius: 10,
  },
  form: {
    width: '90%',
    marginTop: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1448A1',
    marginBottom: 10,
    textAlign: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#6094EE',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#1448A1',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0070BA',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});


export default Cadastro2 ;
