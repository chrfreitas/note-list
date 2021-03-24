type INoteStatusDataSource = 'blocked' | 'pending' | 'done';
type INoteTypeDataSource =
  | 'text-rich'
  | 'text'
  | 'code'
  | 'spreadsheet'
  | 'timer';

export interface INoteDataSource {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  tags: string[];
  status: INoteStatusDataSource;
  type: INoteTypeDataSource;
  selected: boolean;
}

export interface IDataSource {
  getNotes: () => INoteDataSource[];
}
