import { INote, NotesOrder } from '../../interfaces/note';

export interface INoteListProps {
  notes: INote[];
  order: NotesOrder;
  selectedNotes: number;
  add: () => void;
  select: (note: string) => void;
  clearAllSelects: () => void;
  toggleOrder: () => void;
}
