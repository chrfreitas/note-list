import { NotesOrder } from '../../interfaces/note';

export interface IHeaderProps {
  order: NotesOrder;
  numberOfSelected: number;
  onAdd: () => void;
  onToggleOrder: () => void;
  onClear: () => void;
}
