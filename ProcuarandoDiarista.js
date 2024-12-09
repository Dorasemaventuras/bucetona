import React from 'react';
import { View, Text } from 'react-native';
const { width, height } = Dimensions.get('window');
const ProcuarandoDiarista = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/52x52' }}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>Faxina Criada!</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/60x60' }}
          style={styles.profileImage}
        />
      </View>

      {/* Circle Background */}
      <View style={styles.circleBackground}>
        <View style={styles.innerCircle}>
          <Image
            source={{ uri: 'https://via.placeholder.com/82x108' }}
            style={styles.loaderImage}
          />
        </View>
      </View>

      {/* Loading Text */}
      <Text style={styles.loadingText}>
        Aguarde um momento. Procurando Diaristas...
      </Text>
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
    height: 121,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    width: 52,
    height: 52,
    position: 'absolute',
    left: 20,
    top: 35,
  },
  headerTitle: {
    color: '#6094EE',
    fontSize: 20,
    fontWeight: '500',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    top: 35,
  },
  circleBackground: {
    marginTop: 40,
    width: 256,
    height: 256,
    borderRadius: 128,
    borderColor: '#838383',
    borderWidth: 2,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 116,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderImage: {
    width: 82,
    height: 108,
  },
  loadingText: {
    marginTop: 30,
    fontSize: 24,
    color: '#0373F3',
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
});
export default ProcuarandoDiarista;
