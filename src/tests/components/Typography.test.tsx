import React from 'react';
import { render } from '@testing-library/react-native';
import { Typography } from '@components';

describe('Typography component', () => {
  it('renders the correct text for H1 variant', () => {
    const text = 'This is some text';
    const { getByTestId } = render(<Typography variant='H1'>{text}</Typography>);
    const typography = getByTestId('typography-h1-test');
    expect(typography).toBeDefined();
  });

  it('renders the correct text for H2 variant', () => {
    const text = 'This is some text';
    const { getByTestId } = render(<Typography variant='H2'>{text}</Typography>);
    const typography = getByTestId('typography-h2-test');
    expect(typography).toBeDefined();
  });

  it('renders the correct text for H3 variant', () => {
    const text = 'This is some text';
    const { getByTestId } = render(<Typography variant='H3'>{text}</Typography>);
    const typography = getByTestId('typography-h3-test');
    expect(typography).toBeDefined();
  });

  it('renders the correct text for H4 variant', () => {
    const text = 'This is some text';
    const { getByTestId } = render(<Typography variant='H4'>{text}</Typography>);
    const typography = getByTestId('typography-h4-test');
    expect(typography).toBeDefined();
  });

  it('renders the correct text for P variant', () => {
    const text = 'This is some text';
    const { getByTestId } = render(<Typography variant='P'>{text}</Typography>);
    const typography = getByTestId('typography-p-test');
    expect(typography).toBeDefined();
  });
});
