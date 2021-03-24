import { INote } from '../../interfaces/note';

export interface IDataSource {
  getNotes: () => INote[];
}
