import faker from 'faker';
import { IDataSource, INoteDataSource } from './datasource.interface';

export const generateFakeNote = (): INoteDataSource => ({
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
    'text',
    'code',
    'spreadsheet',
    'timer'
  ]),
  selected: false
});

const DataSource: IDataSource = {
  getNotes: () =>
    faker.random.arrayElements<INoteDataSource>([
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
