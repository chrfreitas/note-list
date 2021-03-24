export interface IIconProps {
  type:
    | 'plus'
    | 'sort-descending'
    | 'text-rich'
    | 'code-tag'
    | 'text-paragraph'
    | 'spreadsheet'
    | 'timer'
    | string;
  color: string;
  width: number;
  height: number;
}
