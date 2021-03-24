import { OrderType } from '../../services/utils/utils';

type INoteListStatus = 'blocked' | 'pending' | 'done';
type INoteListType = 'text-rich' | 'text' | 'code' | 'spreadsheet' | 'timer';

interface INoteList {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  tags: string[];
  status: INoteListStatus;
  type: INoteListType;
  selected: boolean;
}

export interface INoteListProps {
  notes: INoteList[];
  order: OrderType;
  selectedNotes: number;
  add: () => void;
  select: (note: string) => void;
  clearAllSelects: () => void;
  toggleOrder: () => void;
}
