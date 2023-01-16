interface Column<T> {
  name: string;
  title: string | ((entity: T) => string);
  type?: 'text' | 'link';
}

export interface TablePreviewTextColumn<T> extends Column<T> {
  readonly type?: 'text';
  value: string | ((entity: T) => string);
}

export interface TablePreviewLinkColumn<T> extends Column<T> {
  readonly type: 'link';
  value: {
    url: string | ((entity: T) => string);
    text: string | ((entity: T) => string);
  };
}

export type TablePreviewColumn<T> =
  | TablePreviewTextColumn<T>
  | TablePreviewLinkColumn<T>;
