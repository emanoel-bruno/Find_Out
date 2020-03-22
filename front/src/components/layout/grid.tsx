import React, { FC, ReactNode } from 'react';
import '../../index.scss';
import '../../common.scss';

interface GridProps {
  className?: string;
  vertical: 'up' | 'middle' | 'down';
  horizontal: 'left' | 'right' | 'center';
  items_vertical?: 'up' | 'middle' | 'down';
  items_horizontal?: 'left' | 'right' | 'center';
  columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rows: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap: 0 | 1 | 2 | 3 | 4 | 5;
  fullWidth: boolean;
  fullHeight: boolean;
  children?: ReactNode;
}

function calculateClass(info: GridProps): string {
  let c = info.className + ' d-grid ';

  c = info.horizontal == 'center' ? c + 'gh-center ' : c;
  c = info.horizontal == 'left' ? c + 'gh-left ' : c;
  c = info.horizontal == 'right' ? c + 'gh-right ' : c;

  c = info.vertical == 'middle' ? c + 'gv-middle ' : c;
  c = info.vertical == 'up' ? c + 'gv-up ' : c;
  c = info.vertical == 'down' ? c + 'gv-down ' : c;

  c = info.items_horizontal == 'center' ? c + 'ghi-center ' : c;
  c = info.items_horizontal == 'left' ? c + 'ghi-left ' : c;
  c = info.items_horizontal == 'right' ? c + 'ghi-right ' : c;

  c = info.items_vertical == 'middle' ? c + 'gvi-middle ' : c;
  c = info.items_vertical == 'up' ? c + 'gvi-up ' : c;
  c = info.items_vertical == 'down' ? c + 'gvi-down ' : c;

  c = c + `col-${info.columns} `;
  c = c + `row-${info.rows} `;
  c = c + `g-gap-${info.rows} `;

  c = info.fullHeight ? c + 'min-h-100 h-100vh ' : c;
  c = info.fullWidth ? c + 'w-100 ' : c;

  return c;
}

const Grid: FC<GridProps> = props => {
  // eslint-disable-next-line react/prop-types
  return <div className={calculateClass(props)}>{props.children}</div>;
};

export default Grid;
