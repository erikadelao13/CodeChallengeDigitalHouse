import React from 'react';
import { render } from '@testing-library/react-native';
import { Products } from '@screens';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        id: '123',
      },
    }),
  };
});

describe('Product Screen', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Products />);
    const productScreen = getByTestId('products-screen');
    expect(productScreen).toBeDefined();
  });
});
