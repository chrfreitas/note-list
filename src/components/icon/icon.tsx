import React from 'react';

import { Container } from './icon.styles';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as SortDescending } from '../../assets/icons/sort-descending.svg';
import { ReactComponent as SortAscending } from '../../assets/icons/sort-ascending.svg';
import { ReactComponent as TextRich } from '../../assets/icons/text-rich.svg';
import { ReactComponent as CodeTag } from '../../assets/icons/code-tag.svg';
import { ReactComponent as TextParagraph } from '../../assets/icons/text-paragraph.svg';
import { ReactComponent as Spreadsheet } from '../../assets/icons/spreadsheet.svg';
import { ReactComponent as Timer } from '../../assets/icons/timer.svg';
import { ReactComponent as Locker } from '../../assets/icons/locker.svg';

export interface IIconProps {
  type:
    | 'plus'
    | 'sort-descending'
    | 'text-rich'
    | 'code-tag'
    | 'text-paragraph'
    | 'spreadsheet'
    | 'timer'
    | string;
  color: string;
  width: number;
  height: number;
}

// eslint-disable-next-line complexity
const generateSvg = (type: string) => {
  switch (type) {
    case 'plus':
      return <Plus />;
    case 'sort-descending':
      return <SortDescending />;
    case 'sort-ascending':
      return <SortAscending />;
    case 'text-rich':
      return <TextRich />;
    case 'code-tag':
      return <CodeTag />;
    case 'text-paragraph':
      return <TextParagraph />;
    case 'spreadsheet':
      return <Spreadsheet />;
    case 'timer':
      return <Timer />;
    case 'locker':
      return <Locker />;
    default:
      return null;
  }
};

const Icon = ({ type, color, width, height }: IIconProps) => (
  <Container color={color} width={width} height={height}>
    {generateSvg(type)}
  </Container>
);

export default Icon;
