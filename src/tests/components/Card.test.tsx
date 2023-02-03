import React from 'react';
import { render } from '@testing-library/react-native';
import { Card } from '@components';

describe('Card Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Card date='' points={0} key='1' />);
    const cardContainer = getByTestId('card-test');
    expect(cardContainer).toBeDefined();
  });
});
