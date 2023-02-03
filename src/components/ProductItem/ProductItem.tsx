import React from 'react';
import { View, Image } from 'react-native';
import { colors, moderateScale } from '@utils';
import { LeftArrow } from '@assets/svg';
import { Typography } from '../Typography/Typography';
import { styles } from './ProductItem.styles';
import { IProductItem } from './ProductItem.types';

export const ProductItem: React.FC<IProductItem> = ({
  image,
  product,
  date,
  points,
  isRedemption,
}) => {
  return (
    <View testID='product-item-test' style={styles.productItemContainer}>
      <View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.midContainer}>
        <Typography numberOfLines={1} variant='H4' bold>
          {product}
        </Typography>
        <Typography style={styles.date} variant='P' color={colors.black}>
          {date}
        </Typography>
      </View>
      <View style={styles.rightContainer}>
        <Typography style={styles.points} bold variant='H3'>
          <Typography variant='H3' bold color={isRedemption ? colors.red : colors.green}>
            {isRedemption ? '- ' : '+ '}
          </Typography>
          {points}
        </Typography>
        <LeftArrow height={moderateScale(10)} width={moderateScale(10)} color={colors.black} />
      </View>
    </View>
  );
};
