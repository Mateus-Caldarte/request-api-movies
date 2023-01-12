import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

class Filmes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cards}>
          <Text style={styles.titulo}>{this.props.data.nome}</Text>
          <Image source={{uri: this.props.data.foto}} style={styles.capa} />
        </View>

        <View style={styles.AreaBotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() =>
              Alert.alert(this.props.data.nome, this.props.data.sinopse)
            }>
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  cards: {
    shadowColor: '#000',
    backgroundColor: '#FFF',
    textShadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    padding: 15,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  AreaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderRadius: 8,
  },
  botaoTexto: {
    textAlign: 'center',
    color: '#FFF',
  },
});
export default Filmes;
