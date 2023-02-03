import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  productItemContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  image: {
    borderRadius: moderateScale(10),
    height: moderateScale(55),
    width: moderateScale(55),
  },
  leftContainer: {
    flex: 1,
  },
  midContainer: {
    flex: 1,
    paddingLeft: moderateScale(16),
    paddingRight: moderateScale(50),
    height: moderateScale(55),
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    paddingTop: moderateScale(8),
  },
  points: {
    paddingRight: moderateScale(18),
  },
});
