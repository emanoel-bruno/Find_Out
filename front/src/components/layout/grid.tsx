/* eslint-disable react/prop-types */
import React from 'react';
import '../../index.scss';
import '../../common.scss';
import Container, { ContainerProps } from './container';

class Grid extends Container {
  calculateClass(): string {
    let c = this.state.defaultClass + this.props.className + ' d-grid ';

    c = this.props.horizontal == 'center' ? c + 'gh-center ' : c;
    c = this.props.horizontal == 'left' ? c + 'gh-left ' : c;
    c = this.props.horizontal == 'right' ? c + 'gh-right ' : c;

    c = this.props.vertical == 'middle' ? c + 'gv-middle ' : c;
    c = this.props.vertical == 'up' ? c + 'gv-up ' : c;
    c = this.props.vertical == 'down' ? c + 'gv-down ' : c;

    c = this.props.itemsHorizontal == 'center' ? c + 'ghi-center ' : c;
    c = this.props.itemsHorizontal == 'left' ? c + 'ghi-left ' : c;
    c = this.props.itemsHorizontal == 'right' ? c + 'ghi-right ' : c;

    c = this.props.itemsVertical == 'middle' ? c + 'gvi-middle ' : c;
    c = this.props.itemsVertical == 'up' ? c + 'gvi-up ' : c;
    c = this.props.itemsVertical == 'down' ? c + 'gvi-down ' : c;

    c = c + `col-${this.props.columns} `;
    c = c + `row-${this.props.rows} `;
    c = c + `g-gap-${this.props.rows} `;

    return c;
  }

  constructor(props: ContainerProps) {
    super(props);
  }
  render() {
    return <div className={this.calculateClass()}>{this.props.children}</div>;
  }
}

export default Grid;
