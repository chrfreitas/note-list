import { NotesOrder } from '../../interfaces/note';

export interface IHeaderProps {
  order: NotesOrder;
  selectedNotes: number;
  add: () => void;
  toggleOrder: () => void;
}
