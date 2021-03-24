import { INoteIcons } from '../../interfaces/note';

type IIconTypes = 'plus' | 'sort-ascending' | 'sort-descending' | 'locker';

export interface IIconProps {
  type: IIconTypes | INoteIcons;
  color: string;
  width: number;
  height: number;
}
