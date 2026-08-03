import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import { colors } from '../../theme';

const FRAME_DESIGN_WIDTH = 358;
const FRAME_DESIGN_HEIGHT = 265;
const IMAGE_DESIGN_WIDTH = 265;
const IMAGE_DESIGN_HEIGHT = 370;
const SCREEN_PADDING = 16;

type FormationPitchProps = {
  image: ImageSourcePropType;
};

export function FormationPitch({ image }: FormationPitchProps) {
  const { width } = useWindowDimensions();
  const frameWidth = width - SCREEN_PADDING * 2;
  const scale = frameWidth / FRAME_DESIGN_WIDTH;

  return (
    <View
      style={[
        styles.FormationPitchFacetChassis,
        { height: FRAME_DESIGN_HEIGHT * scale },
      ]}
    >
      <Image
        source={image}
        resizeMode="contain"
        style={[
          styles.FormationPitchSigil,
          {
            width: IMAGE_DESIGN_WIDTH * scale,
            height: IMAGE_DESIGN_HEIGHT * scale,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  FormationPitchFacetChassis: {
    borderRadius: 10,
    backgroundColor: colors.card,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  FormationPitchSigil: {
    transform: [{ rotate: '-90deg' }],
  },
});
