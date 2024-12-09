import 'react-native-gesture-handler'; // Deve ser a primeira linha
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './android/app/src/screens/HomeScreen';
import EsPerfil from './android/app/src/screens/EsPerfil';
import Cadastro from './android/app/src/screens/Cadastro';
import Cadatro2 from './android/app/src/screens/Cadastro2';
import CadastroCartao from './android/app/src/screens/CadastroCartao';
import Certificado from './android/app/src/screens/Certificado';
import Confirmacaodados from './android/app/src/screens/Confirmacaodados';
import Login from './android/app/src/screens/Login';
import PagFiltro from './android/app/src/screens/PagFiltro';
import ProcuarandoDiarista from './android/app/src/screens/ProcuarandoDiarista';
import Termo from './android/app/src/screens/Termo';
import TelaInicial from './android/app/src/screens/TelaInicial';


    
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Escolha' component={EsPerfil}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='cadastro2' component={Cadatro2}/>
        <Stack.Screen name='CadastroCartao' component={CadastroCartao}/>    
        <Stack.Screen name='Certificado' component={Certificado}/>    
        <Stack.Screen name='Login' component={Login}/>    
        <Stack.Screen name='PagFiltro' component={PagFiltro}/>    
        <Stack.Screen name='ProcuarandoDiarista' component={ProcuarandoDiarista}/>    
        <Stack.Screen name='Termo' component={Termo}/>    
        <Stack.Screen name='Confirmacaodados' component={Confirmacaodados}/>    
        <Stack.Screen name='TelaIncial' component={TelaInicial}/>    


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
