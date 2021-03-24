import faker from 'faker';

import { INote } from '../../interfaces/note';
import { IDataSource } from './datasource.interfaces';

export const generateFakeNote = (): INote => ({
  id: faker.random.uuid(),
  title: faker.random.words(),
  subtitle: faker.random.words(),
  date: faker.date.past(),
  tags: faker.random.arrayElements([
    faker.random.word(),
    faker.random.word(),
    faker.random.word(),
    faker.random.word(),
    faker.random.word(),
    faker.random.word()
  ]),
  status: faker.random.arrayElement(['blocked', 'pending', 'done']),
  type: faker.random.arrayElement([
    'text-rich',
    'code-tag',
    'text-paragraph',
    'spreadsheet',
    'timer'
  ]),
  selected: false
});

const DataSource: IDataSource = {
  getNotes: () =>
    faker.random.arrayElements<INote>([
      generateFakeNote(),
      generateFakeNote(),
      generateFakeNote(),
      generateFakeNote(),
      generateFakeNote(),
      generateFakeNote(),
      generateFakeNote(),
      generateFakeNote(),
      generateFakeNote(),
      generateFakeNote()
    ])
};

export default DataSource;
