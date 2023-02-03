import { useEffect, useState } from 'react';
import { getProducts } from '@api/services';
import { IProductsApi } from '@api/types';
import { getProductById } from '@api/services';
import { PRODUCT_TYPE } from '@constants';

export const useProducts = (id?: string | undefined) => {
  const [products, setProducts] = useState<Array<IProductsApi>>([]);
  const [product, setProduct] = useState<IProductsApi>();
  const [productType, setProductType] = useState(PRODUCT_TYPE.ALL);

  useEffect(() => {
    (async () => {
      try {
        const productsResult = await getProducts();
        showProduct(productType, productsResult?.data);
      } catch (err) {
        //TODO: Handle errors
        // eslint-disable-next-line no-console
        console.log('err', err);
      }
    })();
  }, [productType]);

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const productResult = await getProductById(id);
          setProduct(productResult?.data);
        }
      } catch (err) {
        //TODO: Handle errors
        // eslint-disable-next-line no-console
        console.log('err', err);
      }
    })();
  }, []);

  const totalPoints = products.reduce((acc, currentProduct) => {
    if (currentProduct.is_redemption) return acc;
    return acc + currentProduct.points;
  }, 0);

  const showProduct = (prodType: string, selectedProdData: Array<IProductsApi>) => {
    switch (prodType) {
      case PRODUCT_TYPE.ALL:
        setProducts(selectedProdData);
        break;
      case PRODUCT_TYPE.EARNED:
        const earned = selectedProdData.filter((prod) => !prod.is_redemption);
        setProducts(earned);
        break;
      case PRODUCT_TYPE.REDEEMED:
        const redeemed = selectedProdData.filter((prod) => prod.is_redemption);
        setProducts(redeemed);
        break;
      default:
        setProducts(selectedProdData);
        break;
    }
  };

  const selectProductType = (option: string) => {
    switch (option) {
      case PRODUCT_TYPE.ALL:
        setProductType(PRODUCT_TYPE.ALL);
        break;
      case PRODUCT_TYPE.EARNED:
        setProductType(PRODUCT_TYPE.EARNED);
        break;
      case PRODUCT_TYPE.REDEEMED:
        setProductType(PRODUCT_TYPE.REDEEMED);
        break;
      default:
        setProductType(PRODUCT_TYPE.ALL);
        break;
    }
  };

  return { products, product, totalPoints, selectProductType, productType };
};
