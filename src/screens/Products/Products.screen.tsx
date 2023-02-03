import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { PRODUCT_TYPE, APP_STACK } from '@constants';
import { IProductsApi } from '@api/types';
import { Typography, Card, Button, ProductItem } from '@components';
import { TAppStackParamsList } from '@router/App.stack';
import { colors, moderateScale } from '@utils';
import { useProducts } from '@hooks';
import { styles } from './Products.styles';

export const Products = () => {
  const { products, totalPoints, selectProductType, productType } = useProducts();
  const navigation = useNavigation<NavigationProp<TAppStackParamsList>>();

  const renderProducts = ({ item, index }: { item: IProductsApi; index: number }) => {
    const lastElement = products.length - 1;
    return (
      <TouchableOpacity
        style={{ marginBottom: lastElement === index ? moderateScale(40) : moderateScale(8) }}
        onPress={() => navigation.navigate(APP_STACK.PRODUCT_DETAIL, { id: item?.id })}
        activeOpacity={0.7}
      >
        <ProductItem
          image={item?.image}
          product={item?.product}
          points={item?.points}
          isRedemption={item?.is_redemption}
          date={item?.createdAt}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Typography variant='H2' bold>
          Bienvenido de vuelta!
        </Typography>
        <Typography variant='H3'>Ruben Rodriguez</Typography>
        <View style={styles.myPointsContainer}>
          <Typography variant='H4' bold color={colors.gray}>
            TUS PUNTOS
          </Typography>
          <View style={styles.cardContainer}>
            <Card date='Diciembre' points={totalPoints} />
          </View>
        </View>
        <View style={styles.transaction}>
          <Typography variant='H4' bold color={colors.gray}>
            TUS MOVIMIENTOS
          </Typography>
          <FlatList
            data={products}
            style={styles.transactionsContainer}
            renderItem={renderProducts}
          />
        </View>
        {productType === PRODUCT_TYPE.ALL ? (
          <View style={styles.buttonsContainer}>
            <View style={[styles.customButtom, { paddingRight: moderateScale(7) }]}>
              <Button
                onPress={() => selectProductType(PRODUCT_TYPE.EARNED)}
                text='Ganados'
                textVariant='H3'
              />
            </View>
            <View style={[styles.customButtom, { paddingLeft: moderateScale(7) }]}>
              <Button
                onPress={() => selectProductType(PRODUCT_TYPE.REDEEMED)}
                text='Canjeados'
                textVariant='H3'
              />
            </View>
          </View>
        ) : (
          <Button
            onPress={() => selectProductType(PRODUCT_TYPE.ALL)}
            text='Todos'
            textVariant='H3'
          />
        )}
      </View>
    </SafeAreaView>
  );
};
