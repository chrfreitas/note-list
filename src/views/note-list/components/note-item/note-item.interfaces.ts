import { INote } from '../../../../interfaces/note';

export interface INoteItemProps extends INote {
  onSelect: (id: string) => void;
  onClear: () => void;
}
