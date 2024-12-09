import React from 'react';
import { View, Text } from 'react-native';

const TermosDiretrizes = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    Alert.alert("Confirmação", "Você aceitou os Termos e Diretrizes!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>9:41</Text>
      </View>

      {/* Título */}
      <Text style={styles.title}>Termos e Diretrizes</Text>

      {/* Voltar Ícone */}
      <View style={styles.iconContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/30x30' }}
          style={styles.icon}
        />
      </View>

      {/* Conteúdo */}
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Termos de Serviço</Text>
        <Text style={styles.text}>
          Ao utilizar o aplicativo Limpa Já, você concorda em receber serviços
          de empregadas domésticas para tarefas domiciliares. O pagamento é
          devido após a conclusão do serviço conforme acordado. Reservamo-nos o
          direito de recusar qualquer serviço. O aplicativo não se responsabiliza
          por danos materiais ou pessoais resultantes do uso dos serviços
          prestados.
        </Text>

        <Text style={styles.sectionTitle}>Política de Privacidade</Text>
        <Text style={styles.text}>
          O Limpa Já compromete-se a proteger suas informações pessoais. Os
          dados fornecidos serão usados exclusivamente para a prestação de
          serviços e não serão compartilhados com terceiros sem seu consentimento.
          Utilizamos medidas de segurança para garantir a confidencialidade das
          suas informações.
        </Text>

        <Text style={styles.sectionTitle}>Termos Gerais</Text>
        <Text style={styles.text}>
          Ao utilizar o Limpa Já, você concorda em cumprir todas as leis e
          regulamentos locais. Reservamo-nos o direito de modificar ou encerrar
          os serviços a qualquer momento, sem aviso prévio. Qualquer violação
          destes termos pode resultar na rescisão da sua conta.
        </Text>
      </View>

      {/* Botão Li e Aceito */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleAccept}
        disabled={accepted}
      >
        <Text style={styles.buttonText}>
          {accepted ? "Aceito" : "Li e Aceito"}
        </Text>
      </TouchableOpacity>
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
    backgroundColor: '#1448A1',
    width: '100%',
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#E7E7E8',
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3568B3',
    marginVertical: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 60,
    left: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  contentContainer: {
    width: '90%',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#3568B3',
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
    textAlign: 'justify',
    marginBottom: 20,
  },
  button: {
    width: '70%',
    height: 54,
    backgroundColor: '#3568B3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});

export default Termo ;
