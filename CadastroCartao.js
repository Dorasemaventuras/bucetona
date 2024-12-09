import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';

const { width, height } = Dimensions.get('window'); // Responsividade com dimensões dinâmicas

const CadastroCartao = () => {
  const handleContinue = () => {
    Alert.alert('Ação', 'Você clicou em "Continuar"!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background */}
      <View style={styles.background} />

      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={{ uri: 'https://via.placeholder.com/95x90' }}
        />
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{ uri: 'https://via.placeholder.com/45x39' }}
        />
        <View style={styles.cardInfo}>
          <Text style={styles.cardText}>CVV</Text>
          <Text style={styles.cardText}>Validade</Text>
        </View>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número do Cartão</Text>
        <TextInput style={styles.input} placeholder="Digite o número do cartão" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome do Titular</Text>
        <TextInput style={styles.input} placeholder="Digite o nome do titular" />
      </View>

      <View style={styles.row}>
        <View style={styles.inputContainerHalf}>
          <Text style={styles.label}>CVV</Text>
          <TextInput style={styles.input} placeholder="CVV" />
        </View>
        <View style={styles.inputContainerHalf}>
          <Text style={styles.label}>Validade</Text>
          <TextInput style={styles.input} placeholder="MM/AA" />
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E7E7E8',
    alignItems: 'center',
    padding: 20,
  },
  background: {
    width: '100%',
    height: height * 0.15,
    backgroundColor: '#E7E7E8',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  header: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 20,
  },
  headerImage: {
    width: 95,
    height: 90,
  },
  card: {
    backgroundColor: '#1448A1',
    width: '90%',
    borderRadius: 30,
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 45,
    height: 39,
    marginBottom: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
    fontWeight: '700',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  inputContainerHalf: {
    width: '45%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#6094EE',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: '#1448A1',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#6094EE',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default CadastroCartao;
