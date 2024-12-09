import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const BemVindo = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home'); // Substitua 'Home' pelo nome da próxima tela
    }, 5000);

    return () => clearTimeout(timeout); // Limpa o timeout ao desmontar o componente
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Fundo */}
      <View style={styles.background} />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'android/app/src/image/image 37.png ' }}
          style={styles.logo}
        />
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/60x60' }}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Conteúdo Principal */}
      <View style={styles.content}>
        <Image
          source={{ uri: 'android/app/src/image/image 37.png' }}
          style={styles.image}
        />
        <Text style={styles.title}>
          Parabéns!{'\n'}Você completou o cadastro!{'\n'}
          Bem-Vindo(a) ao{' '}
          <Text style={styles.highlight}>DiaristasJá</Text>
        </Text>
      </View>

      {/* Barra inferior */}
      <View style={styles.footer}>
        <View style={styles.footerBar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E8',
    position: 'relative',
    borderRadius: 40,
    overflow: 'hidden',
  },
  background: {
    width: width,
    height: height * 0.7,
    position: 'absolute',
    backgroundColor: '#E8E8E8',
    top: height * 0.2,
  },
  header: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  logo: {
    width: 95,
    height: 90,
  },
  profileContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  image: {
    width: 275,
    height: 291,
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '600',
    color: '#0373F3',
    fontFamily: 'Poppins',
  },
  highlight: {
    color: '#1448A1',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  footerBar: {
    width: 134,
    height: 5,
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    borderRadius: 100,
  },
});

export default BemVindo;
