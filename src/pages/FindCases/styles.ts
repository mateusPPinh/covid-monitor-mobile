import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  width: 300px;
  padding-horizontal: 20px;
`;

export const Title = styled.Text`
  font-size: 31px;
  line-height: 38px;
  font-weight: bold;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  margin-bottom: 15px;
  margin-top: 30px;
  height: 60px;
  background-color: #333;
  border-radius: 10px;
  font-size: 16px;
  padding-horizontal: 24px;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const Button = styled(RectButton)`
  height: 56px;
  background: #a1cdf4;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;

export const CardButton = styled.TouchableOpacity``;

export const Card = styled.View`
  width: 100%;
  height: 120px;
  background: #c9cad9;
  border-radius: 6px;
  justify-content: center;
  padding-horizontal: 35px;
  margin-top: 40px;
  align-items: center;
`;

export const StateName = styled.Text`
  font-size: 19px;
  font-weight: bold;
  flex-direction: row;
`;

export const StatePreInfo = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
`;
