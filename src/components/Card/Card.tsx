import React from 'react';
import { View } from 'react-native';
import { colors } from '@utils';
import { Typography } from '../Typography/Typography';
import { styles } from './Card.styles';
import { ICard } from './Card.types';

export const Card: React.FC<ICard> = ({ date, points }) => {
  return (
    <View testID='card-test' style={styles.cardContainer}>
      <Typography style={styles.date} variant='H3' bold color={colors.white}>
        {date}
      </Typography>
      <Typography style={styles.points} variant='H1' bold color={colors.white}>
        {points} pts
      </Typography>
    </View>
  );
};
