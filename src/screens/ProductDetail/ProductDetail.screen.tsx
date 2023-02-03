import React from 'react';
import { View, SafeAreaView, Image, ScrollView } from 'react-native';
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { Typography, Button } from '@components';
import { TAppStackParamsList } from '@router/App.stack';
import { colors } from '@utils';
import { useProducts } from '@hooks';
import { styles } from './ProductDetail.styles';

export const ProductDetail = () => {
  const route = useRoute<RouteProp<TAppStackParamsList>>();
  const navigation = useNavigation<NavigationProp<TAppStackParamsList>>();
  const id = route?.params?.id;
  const { product, formatProductDates } = useProducts(id);
  const formattedDate = formatProductDates(product?.createdAt);

  return (
    <SafeAreaView testID='product-detail-screen-test'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <Typography style={styles.productName} variant='H2' bold>
            {product?.product}
          </Typography>
        </View>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: product?.image }} />
          <View style={styles.bottomContainer}>
            <Typography variant='H4' bold color={colors.gray}>
              Detalles del producto:
            </Typography>
            <Typography style={styles.date} variant='H3' bold color={colors.black}>
              Comprado el {formattedDate}
            </Typography>
            <Typography variant='H4' bold color={colors.gray}>
              Con esta compra acumulaste:
            </Typography>
            <Typography style={styles.points} variant='H2' bold color={colors.black}>
              {product?.points} puntos
            </Typography>
          </View>
          <Button onPress={() => navigation.goBack()} text='Aceptar' textVariant='H3' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
