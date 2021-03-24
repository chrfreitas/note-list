type INoteListStatus = 'blocked' | 'pending' | 'done';
type INoteListType = 'text-rich' | 'text' | 'code' | 'spreadsheet' | 'timer';

export interface INoteList {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  tags: string[];
  status: INoteListStatus;
  type: INoteListType;
  selected: boolean;
}
