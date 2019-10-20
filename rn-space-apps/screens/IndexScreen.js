import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image, Dimensions
} from 'react-native';

import Map from '../components/Map';
import { Ionicons } from '@expo/vector-icons';

import BodyText from '../components/BodyText';
import Input from '../components/Input';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

import Colors from '../constants/colors';

import Api from '../model/api';

const API = [
  new Api('1', '27', '80', '70')
]

const IndexScreen = props => {

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.mapContainer}>
          <Map style={styles.imageContainer} />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="md-rainy" size={24} color="green" />
          <Ionicons name="md-thermometer" size={24} color="red" />
          <Ionicons name="md-medkit" size={24} color={Colors.primary} />
        </View>
        <Card style={styles.inputContainer}>
          <BodyText>FALE SEU PROBLEMA</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
          />
          <BodyText>QUALIDADE</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
          />
          <BodyText>TEMPO</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
          />
          <BodyText>E-MAIL</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
          />
        </Card>
        <View>
          <MainButton style={styles.button} onPress={() => { props.navigation.navigate('Historico') }}>ENVIAR</MainButton>
        </View>
      </View>
    </ScrollView>
  );
};

IndexScreen.navigationOptions = {
  headerTitle: 'Map',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold'
  },
  inputContainer: {
    width: 470,
    maxWidth: '100%',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10
  },
  mapContainer: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 30,
    padding: 10
  },
  input: {
    width: '100%',
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapImage: {
    width: '100%',
    height: '100%'
  }
});

export default IndexScreen;
