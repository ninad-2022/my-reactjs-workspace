import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ICON_HELPER = {
  colorOne: '#F7CD2E',
  colorTwo: '#38CC77',
  colorThreee: '#0D0D0D',
  size: 38,
  circleThim: 'circle-thin',
  times: 'times',
  pencil: 'pencil',
};

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = (props: IconsProps) => {
  switch (props?.name) {
    case 'circle':
      return (
        <Icon
          name={ICON_HELPER.circleThim}
          size={ICON_HELPER.size}
          color={ICON_HELPER.colorOne}
        />
      );
      break;
    case 'cross':
      return (
        <Icon
          name={ICON_HELPER.times}
          size={ICON_HELPER.size}
          color={ICON_HELPER.colorTwo}
        />
      );
    default:
      return (
        <Icon
          name={ICON_HELPER.pencil}
          size={ICON_HELPER.size}
          color={ICON_HELPER.colorThreee}
        />
      );
  }
};

export default Icons;

const styles = StyleSheet.create({});
