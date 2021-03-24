import React from 'react';

import Icon from '../../../../components/icon/icon';
import { INoteIconProps } from './note-icon.interfaces';
import NoteIconTypes from './note-icon.types';

const NoteIcon = ({ type }: INoteIconProps) => {
  const { icon, color, width, height } = NoteIconTypes[type];
  return <Icon type={icon} width={width} height={height} color={color} />;
};

export default NoteIcon;
