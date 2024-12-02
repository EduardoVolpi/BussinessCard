import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View,
  Image, Dimensions, ScrollView,
  Platform, Button, Linking,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProjectCard from './ProjectCards';

const { width } = Dimensions.get('screen')

export default function App() {

  // TODO CONSTANTE NOME - DEFINIÇÃO 
  const nome = 'Eduardo Volpi';

  // TODO FUNÇÃO PROFISSAO - DEFINIÇÃO
  const profissao = () => {
    return 'FullStack Developer'
  }

  // TODO CONSTANTE  LINKS-ICONES
  const links = {
    github: 'https://github.com/eduardovolpi',
    email: 'eduardovolpi@live.com',
    x: 'https://twitter.com/eduardovolpi',
  }

  // TODO FUNÇÃO RENDERIZARICONES QUE RETORNA UM JSX
  const renderizarIcones = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 20 }}>
        {links.github && <FontAwesome6 name="github" size={24} color="black" style={{ marginRight: 10 }} />}
        {links.x && <FontAwesome6 name="x-twitter" size={24} color="black" style={{ marginRight: 10 }} />}
        {links.email && <FontAwesome6 name="at" size={24} color="black" />}
      </View>
    )
  }

  // TODO FUNÇÃO ONCONTACTME PARA O BOTÃO 'ENVIE-ME UM EMAIL
  const onContactMe = () => {
    // Alert.alert('Email enviado com sucesso!');
    Linking.openURL('mailto:Z0E7K@example.com');
  }

  //////////////////////////////////////////////////////////////////////
  // TODO MAIN FUNCTION
  /////////////////////////////////////////////////////////////////////
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <ScrollView>
          <View style={styles.container}>

            {/* TODO IMAGEM SUPERIOR */}
            <Image
              source={require('./assets/developer.jpeg')}
              style={{
                width: width,
                height: width * (9 / 16), // Ajusta a altura com base na proporção da imagem
                resizeMode: 'cover',
              }}
            />

            {/* TODO - IMAGEM PERFIL */}
            <Image
              source={require('./assets/foto.jpg')}
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                borderWidth: 5,
                borderColor: '#ececec',
                marginTop: -45
              }}
            />

            {/* TODO CONSTANTE NOME - USO */}
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' }}>{nome}</Text>

            {/* TODO FUNÇÃO PROFISSÃO - USO */}
            <Text>{profissao()}</Text>

            {/* TODO FUNÇÃO RENDERIZARICONES - USO */}
            {renderizarIcones()}

            {/* TODO BOTÃO 'ENVIE-ME UM EMAIL' */}
            {links.email && <Button title="Envie-me um email" onPress={onContactMe} />}

            {/* TODO TEXTO DA BIO */}
            <Text style={{
              marginVertical: 20,
              paddingHorizontal: 15,
              fontSize: 16,
              lineHeight: 21,
              textAlign: 'justify'
            }}>
              Morbi nec metus. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Nam pretium turpis et arcu. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Curabitur at lacus ac velit ornare lobortis.
            </Text>

            {/* TODO PROJETOS */}
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Projetos</Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}>

              <ProjectCard name="Apple Cards" imagem={require('./assets/projects/project1.jpeg')} />
              <ProjectCard name="Trello" imagem={require('./assets/projects/project2.jpeg')} />
              <ProjectCard name="Flappy Bird" imagem={require('./assets/projects/project3.jpeg')} />
              <ProjectCard name="Todo App" imagem={require('./assets/projects/project4.jpeg')} />

            </ScrollView>

            {/* TODO STATUSBAR - CONDICIONAL */}
            {Platform.OS === 'android' && (
              <StatusBar style="auto" backgroundColor='#ffc70f' />
            )}


          </View>
        </ScrollView >
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// TODO ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
