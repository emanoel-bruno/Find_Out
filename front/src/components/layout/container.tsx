/* eslint-disable react/prop-types */
import React, { FC, ReactNode, Component, HTMLAttributes } from 'react';
import '../../index.scss';
import '../../common.scss';
import { Interface } from 'readline';

export interface ContainerProps {
  className?: string;
  background?: 'white' | 'transparent';
  fullWidth?: boolean;
  fullHeight?: boolean;
  children?: ReactNode;
  vertical: 'up' | 'middle' | 'down';
  horizontal: 'left' | 'right' | 'center';
  direction?: 'row' | 'column';
  itemsVertical?: 'up' | 'middle' | 'down';
  itemsHorizontal?: 'left' | 'right' | 'center';
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 0 | 1 | 2 | 3 | 4 | 5;
}

interface ContainerState {
  defaultClass: string;
}

class Container extends Component<ContainerProps, ContainerState> {
  static defaultProps = {
    background: 'transparent',
    fullWidth: false,
    fullHeight: false,
    direction: 'row',
    itemsVertical: 'middle',
    itemsHorizontal: 'center',
    columns: 2,
    rows: 1,
    gap: 0
  };

  calculateDefaultClass(): string {
    let c = ' ';

    c = this.props.background == 'transparent' ? c + 'b-transparent ' : c;
    c = this.props.background == 'white' ? c + 'b-white ' : c;

    c = this.props.fullHeight ? c + 'min-h-100 h-100vh ' : c;
    c = this.props.fullWidth ? c + 'w-100 ' : c;

    return c;
  }

  constructor(props: ContainerProps) {
    super(props);
    this.state = {
      defaultClass: this.calculateDefaultClass()
    };
  }
}

export default Container;
