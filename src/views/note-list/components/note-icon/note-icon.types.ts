import { colors } from '../../../../styles/colors';
import { INoteIconTypes } from './note-icon.interfaces';

const NoteIconTypes: INoteIconTypes = {
  'text-rich': {
    icon: 'text-rich',
    color: colors.blue,
    width: 12,
    height: 10
  },
  'text-paragraph': {
    icon: 'text-paragraph',
    color: colors.blue,
    width: 12,
    height: 8
  },
  'code-tag': {
    icon: 'code-tag',
    color: colors.purple,
    width: 14,
    height: 8
  },
  spreadsheet: {
    icon: 'spreadsheet',
    color: colors.green,
    width: 12,
    height: 12
  },
  timer: {
    icon: 'timer',
    color: colors.orange,
    width: 12,
    height: 12
  }
};

export default NoteIconTypes;
