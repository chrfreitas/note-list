import React from 'react';

import Icon from '../../../../components/icon/icon';
import NoteIconTypes from './note-icon.types';

type INoteType = 'text-rich' | 'text' | 'code' | 'spreadsheet' | 'timer';

interface INoteIconProps {
  type: INoteType;
}

const NoteIcon = ({ type }: INoteIconProps) => {
  const { icon, color, width, height } = NoteIconTypes[type];
  return <Icon type={icon} width={width} height={height} color={color} />;
};

export default NoteIcon;
