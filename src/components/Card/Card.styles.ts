import { StyleSheet } from 'react-native';
import { colors } from '@utils';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  cardContainer: {
    width: moderateScale(286),
    height: moderateScale(143),
    backgroundColor: colors.blue,
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  points: {
    textAlign: 'center',
  },
  date: {
    marginBottom: moderateScale(8),
  },
});
