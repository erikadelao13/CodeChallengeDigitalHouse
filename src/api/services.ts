import instance from './apiConfig';
import { digitalHouseUrls } from './urls';

export const getProducts = () => instance.get(digitalHouseUrls.products);

export const getProductById = (id: string) =>
  instance.get(`${digitalHouseUrls.products}/${id}`);
