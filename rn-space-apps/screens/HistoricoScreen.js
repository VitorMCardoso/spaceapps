import React, { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Input from '../components/Input';
import Card from '../components/Card';

const HistoricoScreen = props => {

    return (
        <View style={styles.screen}>
            <Card style={styles.inputContainer}>
                <TitleText>OCORRENCIA</TitleText>
                <BodyText>Gripe Alta</BodyText>
                <TitleText>QUALIDADE</TitleText>
                <BodyText>Alta</BodyText>
                <TitleText>TEMPO</TitleText>
                <BodyText>3 horas</BodyText>
                <TitleText>E-MAIL</TitleText>
                <BodyText>teste@teste.com.br</BodyText>

            </Card>
        </View>
    );
};

HistoricoScreen.navigationOptions = {
    headerTitle: 'Historico',
  }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer: {
        width: 470,
        maxWidth: '100%',
        alignItems: 'flex-start',
        marginBottom: 20
    },
    input: {
        width: '100%',
        textAlign: 'center'
    }
});

export default HistoricoScreen;
