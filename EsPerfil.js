// src/screens/EsPerfil.js
import React from 'react';
import { View, Text } from 'react-native';
const { width, height } = Dimensions.get('window');

const EsPerfil = () => {
  return (
    <View style={styles.container}>
      {/* Fundo radial */}
      <View style={styles.background} />

      {/* Título principal */}
      <Text style={styles.title}>
        Escolha uma das opções abaixo para iniciar o processo de cadastro:
      </Text>

      {/* Opções de Perfis */}
      <View style={styles.optionsWrapper}>
        {/* Perfil Cliente */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionHeader}>
            Se você deseja contratar serviços:
          </Text>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Cadastro2')}
          >
            <Image
              style={styles.cardImage}
              source={{ uri: 'https://via.placeholder.com/254x233' }}
            />
            <Text style={styles.cardText}>Perfil Cliente</Text>
          </TouchableOpacity>
        </View>

        {/* Perfil Diarista */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionHeader}>
            Se você deseja prestar serviços:
          </Text>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Cadastro2')}
          >
            <Image
              style={styles.cardImage}
              source={{ uri: 'https://via.placeholder.com/254x233' }}
            />
            <Text style={styles.cardText}>Perfil Diarista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: width,
    height: height * 0.3,
    backgroundColor: 'rgba(21, 70, 160, 0.85)',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'absolute',
    top: 0,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  optionsWrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  optionContainer: {
    flex: 1,
    marginVertical: 10,
    alignItems: 'center',
  },
  optionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3F3F3F',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    width: '90%',
    aspectRatio: 1.5, // Mantém proporção do card
    backgroundColor: '#1448A1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    overflow: 'hidden',
  },
  cardImage: {
    width: '70%',
    height: '50%',
    opacity: 0.5,
    position: 'absolute',
    transform: [{ rotate: '-23deg' }],
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    zIndex: 1,
  },
});

export default EsPerfil;
