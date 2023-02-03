import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  h1: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: moderateScale(32),
  },
  h2: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: moderateScale(24),
    lineHeight: moderateScale(27),
  },
  h3: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(27),
  },
  h4: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: moderateScale(14),
  },
  p: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: moderateScale(12),
  },
  h1Bold: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: moderateScale(32),
  },
  h2Bold: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: moderateScale(24),
  },
  h3Bold: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: moderateScale(16),
  },
  h4Bold: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: moderateScale(14),
  },
  pBold: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: moderateScale(12),
  },
});
