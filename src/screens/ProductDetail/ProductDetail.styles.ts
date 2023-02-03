import { StyleSheet } from 'react-native';
import { moderateScale, colors } from '@utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: moderateScale(20),
  },
  topContainer: {
    backgroundColor: colors.skyblue,
    height: moderateScale(150),
    justifyContent: 'flex-end',
    paddingHorizontal: moderateScale(20),
  },
  productName: {
    marginBottom: moderateScale(24),
  },
  image: {
    borderRadius: moderateScale(10),
    width: '100%',
    height: moderateScale(350),
    marginTop: moderateScale(20),
  },
  bottomContainer: {
    marginTop: moderateScale(32),
    marginBottom: moderateScale(47),
  },
  points: {
    marginTop: moderateScale(32),
  },
  date: {
    marginVertical: moderateScale(20),
  },
});
