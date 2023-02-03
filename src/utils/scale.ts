import { Dimensions, Platform } from 'react-native';

const WIDTH_DESING = 393;
const HEIHGT_DESING = 852;
export const { width, height } = Dimensions.get(Platform.OS === 'ios' ? 'screen' : 'window');

export const scale = (size: number) => (width / WIDTH_DESING) * size;
export const verticalScale = (size: number) => (height / HEIHGT_DESING) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
