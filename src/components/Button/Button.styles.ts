import { StyleSheet } from 'react-native';
import { colors } from '@utils';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: colors.blue,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  text: {
    textAlign: 'center',
  },
});
