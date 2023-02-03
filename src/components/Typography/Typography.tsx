import React from 'react';
import { Text } from 'react-native';
import { colors } from '@utils';
import { styles } from './Typography.styles';
import { TTypographyProps } from './Typography.types';

export const Typography: React.FC<TTypographyProps> = ({
  color = colors.black,
  variant = 'H1',
  children,
  style,
  bold,
  ...rest
}) => {
  switch (variant) {
    case 'H1':
      return (
        <Text style={[bold ? styles.h1Bold : styles.h1, { color: color }, style]} {...rest}>
          {children}
        </Text>
      );
    case 'H2':
      return (
        <Text style={[bold ? styles.h2Bold : styles.h2, { color: color }, style]} {...rest}>
          {children}
        </Text>
      );
    case 'H3':
      return (
        <Text style={[bold ? styles.h3Bold : styles.h3, { color: color }, style]} {...rest}>
          {children}
        </Text>
      );
    case 'H4':
      return (
        <Text style={[bold ? styles.h3Bold : styles.h4, { color: color }, style]} {...rest}>
          {children}
        </Text>
      );
    case 'P':
      return (
        <Text style={[bold ? styles.pBold : styles.p, { color: color }, style]} {...rest}>
          {children}
        </Text>
      );
    default:
      return (
        <Text style={[bold ? styles.pBold : styles.p, { color: color }, style]} {...rest}>
          {children}
        </Text>
      );
  }
};
