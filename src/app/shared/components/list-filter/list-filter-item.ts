interface Item {
  name: string;
  title: string;
  type?: 'text' | 'select';
}

export interface ListFilterSelectItem extends Item {
  readonly type: 'select';
  options: (string | number | { value: string | number; text: string })[];
}
export type ListFilterSelectItemOption = ListFilterSelectItem['options'][0];

export type ListFilterItem = ListFilterSelectItem;
