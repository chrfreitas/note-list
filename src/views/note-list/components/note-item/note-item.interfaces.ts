import { INote } from '../../../../interfaces/note';

export interface INoteItemProps extends INote {
  select: (id: string) => void;
  clearAllSelects: () => void;
}
