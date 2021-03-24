import { INote, NotesOrder } from '../../interfaces/note';

export interface INoteListProps {
  notes: INote[];
  order: NotesOrder;
  numberOfSelected: number;
  add: () => void;
  select: (note: string) => void;
  clear: () => void;
  toggleOrder: () => void;
}
