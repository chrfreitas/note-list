export enum OrderType {
  ascending = 'ascending',
  descending = 'descending'
}

export interface IHeaderProps {
  order: OrderType;
  selectedNotes: number;
  add: () => void;
  toggleOrder: () => void;
}
