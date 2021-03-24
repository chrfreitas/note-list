export type INoteStatus = 'blocked' | 'pending' | 'done';

export type INoteType =
  | 'text-rich'
  | 'code-tag'
  | 'text-paragraph'
  | 'spreadsheet'
  | 'timer';

export enum NotesOrder {
  ascending = 'ascending',
  descending = 'descending'
}

export type INoteIcons = INoteType;

export interface INote {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  tags: string[];
  status: INoteStatus;
  type: INoteType;
  selected: boolean;
}
