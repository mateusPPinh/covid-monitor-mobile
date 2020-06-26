import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding-top: ${Constants.statusBarHeight + 20}px;
  flex: 1;
  padding-horizontal: 20px;
  background: #262730;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GoBackMain = styled.TouchableOpacity``;

export const StateTitle = styled.Text`
  font-size: 23px;
  margin-top: 30px;
  color: #fff;
`;

export const ButtonAnimated = styled(RectButton)`
  margin-top: 30px;
  width: 100%;
  background: #54577c;
  height: 56px;
  border-radius: 7px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 24px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const StateTitleBold = styled.Text`
  font-weight: bold;
`;

export const ListContainer = styled(Animated.View)`
  background: #54577c;
  border-radius: 7px;
  padding-horizontal: 24px;
`;

export const Cases = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Deaths = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Suspects = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const NegatoryCases = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
