export interface INoteItemProps {
  id: string;
  type: 'text-rich' | 'text' | 'code' | 'spreadsheet' | 'timer';
  title: string;
  subtitle: string;
  date: Date;
  tags: string[];
  status: 'blocked' | 'pending' | 'done';
  selected: boolean;
  select: (id: string) => void;
  clearAllSelects: () => void;
}
