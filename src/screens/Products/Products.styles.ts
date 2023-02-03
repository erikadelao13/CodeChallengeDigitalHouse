import { StyleSheet } from 'react-native';
import { moderateScale, colors } from '@utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: moderateScale(20),
  },
  myPointsContainer: {
    marginTop: moderateScale(20),
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  transaction: {
    marginVertical: moderateScale(20),
  },
  transactionsContainer: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(20),
    width: '100%',
    height: moderateScale(350),
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(23),
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  customButtom: {
    width: '50%',
  },
});
