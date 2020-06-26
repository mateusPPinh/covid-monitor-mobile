import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FindCases from '../pages/FindCases';
import CasesDescription from '../pages/CasesDescription';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="FindCases" component={FindCases} />
        <AppStack.Screen name="CasesDescription" component={CasesDescription} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
