import React from 'react';
import { View, Text } from 'react-native';

const Certificado = () => {
  const [name, setName] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = () => {
    setOutput(`Nome: ${name}\nCEP: ${cep}\nEndereço: ${address}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha Perfil</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu CEP"
        value={cep}
        onChangeText={(text) => setCep(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu endereço"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />

      {/* Submit Button */}
      <Button title="Imprimir Dados" onPress={handleSubmit} color="#1448A1" />

      {/* Output Rectangle */}
      <View style={styles.outputContainer}>
        <Text style={styles.outputText}>{output}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#E7E7E8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1448A1',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#6094EE',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  outputContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#6094EE',
    borderWidth: 1,
  },
  outputText: {
    fontSize: 16,
    color: '#1448A1',
  },
});
export default Certificado;
