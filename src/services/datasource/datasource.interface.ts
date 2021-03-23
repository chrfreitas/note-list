export interface INoteDataSource {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  tags: string[];
  status: 'blocked' | 'pending' | 'done';
  type: 'text-rich' | 'text' | 'code' | 'spreadcheet' | 'timer';
}

export interface IDataSource {
  getNotes: () => INoteDataSource[];
}
