import { INote, NotesOrder } from '../../interfaces/note';

export interface INoteListProps {
  notes: INote[];
  order: NotesOrder;
  numberOfSelected: number;
  onAdd: () => void;
  onSelect: (note: string) => void;
  onClear: () => void;
  onToggleOrder: () => void;
}
