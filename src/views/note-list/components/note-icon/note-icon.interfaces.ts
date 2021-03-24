import { INoteIcons } from '../../../../interfaces/note';

export interface INoteIconProps {
  type: INoteIcons;
}

export interface INoteIconTypes {
  [key: string]: {
    icon: INoteIcons;
    color: string;
    width: number;
    height: number;
  };
}
