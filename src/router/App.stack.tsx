import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { APP_STACK } from '@constants';
import { ProductDetail, Products } from '@screens';

export type TAppStackParamsList = {
  [APP_STACK.PRODUCTS]: undefined;
  [APP_STACK.PRODUCT_DETAIL]: {
    id: string;
  };
};

const AppStack = createStackNavigator<TAppStackParamsList>();

export const AppStackRouter = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={APP_STACK.PRODUCTS}
  >
    <AppStack.Screen component={Products} name={APP_STACK.PRODUCTS} />
    <AppStack.Screen
      options={{
        headerShown: false,
      }}
      component={ProductDetail}
      name={APP_STACK.PRODUCT_DETAIL}
    />
  </AppStack.Navigator>
);
