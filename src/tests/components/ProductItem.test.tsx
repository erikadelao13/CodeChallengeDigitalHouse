import React from 'react';
import { render } from '@testing-library/react-native';
import { ProductItem } from '@components';

describe('Card Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ProductItem date='' image='' isRedemption={true} product='' points={0} />,
    );
    const productItem = getByTestId('product-item-test');
    expect(productItem).toBeDefined();
  });
});
