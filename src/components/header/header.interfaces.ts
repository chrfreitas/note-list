import { NotesOrder } from '../../interfaces/note';

export interface IHeaderProps {
  order: NotesOrder;
  numberOfSelected: number;
  add: () => void;
  toggleOrder: () => void;
  clear: () => void;
}
