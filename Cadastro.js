import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';

const Cadastro  = () => {
 
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* Background */}
        <View style={styles.background} />
  
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://via.placeholder.com/280x265' }}
          />
        </View>
  
        {/* Form Fields */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome de usuário" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>CPF</Text>
            <TextInput style={styles.input} placeholder="Digite seu CPF" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirme a senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha novamente"
              secureTextEntry
            />
          </View>
        </View>
  
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
  
        {/* Or Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Ou</Text>
          <View style={styles.divider} />
        </View>
  
        {/* Register Button */}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>
  
        {/* Footer Text */}
        <Text style={styles.footerText}>
          Após fazer o cadastro você terá uma verificação de antecedentes para a verificação da segurança das diaristas e contratantes.
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
  background: {
    width: '100%',
    height: 300,
    backgroundColor: '#E7E7E8',
    borderRadius: 40,
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: -100,
  },
  image: {
    width: 280,
    height: 265,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  formContainer: {
    width: '90%',
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderRadius: 20,
    backgroundColor: '#E7E7E8',
    borderColor: 'rgba(196, 196, 196, 0.35)',
    borderWidth: 1,
    paddingLeft: 15,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#00235F',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(102, 102, 102, 0.25)',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 20,
    color: '#666',
  },
  registerButton: {
    backgroundColor: '#0070BA',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  registerButtonText: {
    color: '#E7E7E8',
    fontSize: 20,
    fontWeight: '300',
  },
  footerText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});

export default Cadastro;
