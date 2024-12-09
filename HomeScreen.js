import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const rotateAnim = new Animated.Value(0); // Valor inicial para a rotação

  useEffect(() => {
    // Animação de rotação
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 5000, // 5 segundos
        useNativeDriver: true,
      })
    ).start();

    // Redireciona para a próxima página após 5 segundos
    const timeout = setTimeout(() => {
      navigation.navigate('TelaInicial'); // Substitua 'NextPage' pelo nome da próxima tela
    }, 5000);

    return () => clearTimeout(timeout); // Limpa o timeout caso o componente seja desmontado
  }, [navigation, rotateAnim]);

  // Converte o valor de rotação para graus
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {/* Fundo Radial */}
      <View style={styles.background} />

      {/* Elemento Animado */}
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ rotate: rotateInterpolate }],
          },
        ]}
      >
        <Text style={styles.plusSign}>+</Text>
      </Animated.View>

      {/* Imagem Central */}
      <View style={styles.imageContainer}>
        <View style={styles.largeCircle} />
        <View style={styles.smallCircle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#E7E7E8',
  },
  background: {
    width: width * 2,
    height: height / 2,
    position: 'absolute',
    left: width / 2,
    top: 0,
    transform: [{ rotate: '90deg' }],
    backgroundColor: 'radial-gradient(circle, #0070BA, #052D76)',
    shadowColor: '#1546A0',
    shadowOpacity: 0.5,
    shadowRadius: 16,
  },
  circle: {
    width: 110,
    height: 110,
    borderRadius: 9999,
    backgroundColor: '#0373F3',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height * 0.5,
  },
  plusSign: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '700',
  },
  imageContainer: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeCircle: {
    width: 250,
    height: 250,
    borderRadius: 9999,
    backgroundColor: '#00235F',
  },
  smallCircle: {
    width: 200,
    height: 200,
    borderRadius: 9999,
    backgroundColor: '#00235F',
    position: 'absolute',
  },
});

export default HomeScreen;
