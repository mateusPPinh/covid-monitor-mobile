import React from 'react';
import SvgUri from 'react-native-svg-uri';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, GoBackMain } from './styles';

const CasesDescription: React.FC = () => {
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
          <Icon name="arrow-left" size={28} color="#333" />
        </GoBackMain>
      </Header>
    </Container>
  );
};

export default CasesDescription;
