import React, { useState } from 'react';
import SvgUri from 'react-native-svg-uri';
import { View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  GoBackMain,
  StateTitle,
  StateTitleBold,
  ListContainer,
  Cases,
  Deaths,
  Suspects,
  NegatoryCases,
  ButtonAnimated,
  ButtonText,
} from './styles';

const CasesDescription: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigation = useNavigation();

  function handleToFindCases(): void {
    navigation.goBack('FindCases');
  }

  return (
    <Container>
      <Header>
        <SvgUri
          width="56"
          height="56"
          source={{ uri: 'https://covid19-brazil-api.now.sh/logo.svg' }}
        />
        <GoBackMain onPress={handleToFindCases}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </GoBackMain>
      </Header>

      <StateTitle>
        Estado: <StateTitleBold>Rio de Janeiro</StateTitleBold>
      </StateTitle>

      <View>
        <ButtonAnimated onPress={() => setIsOpen(!isOpen)}>
          <ButtonText>Ver mais</ButtonText>
          {isOpen ? (
            <Icon name="arrow-up" size={21} color="#fff" />
          ) : (
            <Icon name="arrow-down" size={21} color="#fff" />
          )}
        </ButtonAnimated>
        {isOpen && (
          <ListContainer>
            <Cases>Nº de casos: 544365</Cases>
            <Deaths>Nº de mortes: 56809</Deaths>
            <Suspects>Casos suspeitos: 54565</Suspects>
            <NegatoryCases>Casos negativos: 45356</NegatoryCases>
          </ListContainer>
        )}
      </View>
    </Container>
  );
};

export default CasesDescription;
