import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.backgro}>
    <><View style={styles.boxlogo}>
     <Image style={styles.logo} source={require('./assets/logo-pra-fazer.png')}
     />
    </View>

    <View style={styles.container}>
      <TextInput
      style={styles.input}
       placeholder='E-mail'
       />
        
      <TextInput
      style={styles.input}
        placeholder='Senha'
      />

      <TouchableOpacity style={styles.entre}>
        <Text style={styles.Text}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.usu}>Criar Usuário</Text>
      </TouchableOpacity>

      </View></>

     </View>
  );
}

const styles = StyleSheet.create({
  backgro:{
  padding: 30,
  height: '100%',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: '#FF6600'
  },

  boxlogo:{
    paddingTop: 400,
    alignItems: 'center',
  },
  container:{
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  input:{
    backgroundColor: '#FFF',
    width:'90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
  },
  entre:{
    backgroundColor: '#070A52',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  Text:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
  },
  usu:{
    color: '#FFF',
    fontSize: 14,
    padding: 10,
  }
})