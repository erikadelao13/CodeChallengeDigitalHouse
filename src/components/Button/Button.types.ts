import { typographyType } from '../Typography/Typography.types';

export interface IButton {
  onPress: () => void;
  text: string;
  textVariant: typographyType;
}
