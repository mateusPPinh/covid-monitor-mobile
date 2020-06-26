import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  padding-top: ${Constants.statusBarHeight + 10}px;
  flex: 1;
  padding-horizontal: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GoBackMain = styled.TouchableOpacity``;
