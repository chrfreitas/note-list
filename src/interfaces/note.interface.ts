export type INoteStatus = 'blocked' | 'pending' | 'delayed' | 'done';

export interface INoteTags {
  id: number;
  name: string;
}

export interface INote {
  title: string;
  subtitle: String;
  date: string;
  tags: INoteTags;
  status: INoteStatus;
}
