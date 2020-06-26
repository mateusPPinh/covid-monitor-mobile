import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  Card,
  StateName,
  StatePreInfo,
  CardButton,
} from './styles';

const FindCases: React.FC = () => {
  const navigation = useNavigation();

  function handleToCasesDescription(): void {
    navigation.navigate('CasesDescription');
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Container>
          <Title>
            Digite a UF de algum estado e tenha informações sobre os dados da
            Covid-19
          </Title>

          <Input
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            placeholder="Digite a UF"
          />

          <Button onPress={handleToCasesDescription}>
            <ButtonText>Procurar</ButtonText>
          </Button>
          <CardButton>
            <Card>
              <View>
                <SvgUri
                  width="56"
                  height="56"
                  source={{
                    uri: 'https://covid19-brazil-api.now.sh/logo.svg',
                  }}
                />
              </View>
              <StateName>Rio de Janeiro</StateName>
              <StatePreInfo>Nº de casos: 09048</StatePreInfo>
            </Card>
          </CardButton>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default FindCases;
