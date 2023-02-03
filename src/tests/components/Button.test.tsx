import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '@components';

describe('Button component', () => {
  it('renders correctly', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Button onPress={onPress} text='Todo' textVariant='H3' />);
    const buttonComponent = getByTestId('button-component-test');
    expect(buttonComponent).toBeDefined();
  });
});

describe('Button component press', () => {
  it('should call the onPress prop when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Button onPress={onPress} text='Todo' textVariant='H3' />);
    const buttonComponent = getByTestId('button-component-test');
    fireEvent.press(buttonComponent);
    expect(onPress).toHaveBeenCalled();
  });
});
