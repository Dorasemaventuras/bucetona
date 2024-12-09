import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const TelaIncial = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Imagem de Fundo */}
      <Image
        source={{ uri: 'android/app/src/image/7bc46da1-7b3c-4f38-b163-5d4e5c82b84b 1 (1).png ' }}
        style={styles.backgroundImage}
      />
      {/* Sobreposição */}
      <View style={styles.overlay} />

      {/* Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Bem-Vindo(a) ao</Text>
        <Text style={[styles.titleText, styles.highlight]}>Diaristas</Text>
        <Text style={styles.titleText}>Já</Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'android/app/src/image/image 16 (1).png ' }}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E8',
    position: 'relative',
  },
  backgroundImage: {
    width: width,
    height: height,
    position: 'absolute',
  },
  overlay: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
  },
  titleContainer: {
    position: 'absolute',
    top: height * 0.5,
    alignSelf: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 32,
    fontFamily: 'Manrope',
    fontWeight: '200',
    color: 'white',
  },
  highlight: {
    color: '#6094EE',
  },
  buttonContainer: {
    position: 'absolute',
    top: height * 0.75,
    alignSelf: 'center',
  },
  button: {
    width: 242,
    height: 53,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#1448A1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Manrope',
    fontWeight: '600',
    color: '#6094EE',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 95,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 95,
    height: 90,
  },
});

export default TelaIncial;
