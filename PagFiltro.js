import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

const PagFiltro  = () => {
  const [manha, setManha] = useState(false);
  const [tarde, setTarde] = useState(false);
  const [noite, setNoite] = useState(false);
  const [estrela1, setEstrela1] = useState(false);
  const [estrela3a5, setEstrela3a5] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Fundo */}
      <View style={styles.background} />

      {/* Título */}
      <Text style={styles.title}>Escolha horários e opções:</Text>

      {/* Horários */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Horários</Text>
        <TouchableOpacity
          style={[styles.option, manha && styles.selectedOption]}
          onPress={() => setManha(!manha)}
        >
          <Text style={[styles.optionText, manha && styles.selectedText]}>
            Manhã
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, tarde && styles.selectedOption]}
          onPress={() => setTarde(!tarde)}
        >
          <Text style={[styles.optionText, tarde && styles.selectedText]}>
            Tarde
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, noite && styles.selectedOption]}
          onPress={() => setNoite(!noite)}
        >
          <Text style={[styles.optionText, noite && styles.selectedText]}>
            Noite
          </Text>
        </TouchableOpacity>
      </View>

      {/* Avaliação */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Avaliação</Text>
        <TouchableOpacity
          style={[styles.option, estrela1 && styles.selectedOption]}
          onPress={() => setEstrela1(!estrela1)}
        >
          <Text style={[styles.optionText, estrela1 && styles.selectedText]}>
            1 Estrela
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, estrela3a5 && styles.selectedOption]}
          onPress={() => setEstrela3a5(!estrela3a5)}
        >
          <Text style={[styles.optionText, estrela3a5 && styles.selectedText]}>
            3 a 5 Estrelas
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    padding: 20,
  },
  background: {
    width: width,
    height: height * 0.3,
    backgroundColor: '#3DCBB1',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'absolute',
    top: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A202C',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A202C',
    marginBottom: 10,
  },
  option: {
    backgroundColor: '#E2E8F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#CBD5E0',
    borderWidth: 1,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#3B82F6',
    borderColor: '#2563EB',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A202C',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});
export default PagFiltro ;
