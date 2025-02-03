import { Text, TextProps } from 'react-native';

type LabelVarient =
  | 'default'
  | 'screen-heading'
  | 'screen-heading-italic'
  | 'screen-sub-heading'
  | 'caption';
type LabelProps = { varient?: LabelVarient } & TextProps;

export default function Label(props: LabelProps) {
  return (
    <Text
      {...props}
      style={{
        ...(props.varient === 'screen-heading'
          ? {
              fontFamily: 'AGaramondPro-Bold',
              fontSize: 40,
              lineHeight: 50,
              fontWeight: 700,
              color: '#54634B',
            }
          : props.varient === 'screen-heading-italic'
          ? {
              fontFamily: 'AGaramondPro-BoldItalic',
              fontSize: 40,
              lineHeight: 50,
              fontWeight: 400,
              color: '#54634B',
            }
          : {
              fontFamily: 'Avenir',
              fontSize: 12,
              fontWeight: 400,
              color: '#54634B',
            }),
        ...(typeof props.style === 'object' ? props.style : {}),
      }}
    />
  );
}
