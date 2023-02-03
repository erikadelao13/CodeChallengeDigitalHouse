import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { colors } from '@utils';
import { Typography } from '../Typography/Typography';
import { styles } from './Button.styles';
import { IButton } from './Button.types';

export const Button: React.FC<IButton> = ({ onPress, text, textVariant }) => {
  return (
    <TouchableOpacity testID='button-component-test' onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Typography style={styles.text} variant={textVariant} bold color={colors.white}>
          {text}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};
