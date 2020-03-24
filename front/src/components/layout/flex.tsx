/* eslint-disable react/prop-types */
import React from 'react';
import '../../index.scss';
import '../../common.scss';
import Container, { ContainerProps } from './container';

class Flex extends Container {
  calculateClass(): string {
    let c = this.state.defaultClass + this.props.className + ' d-flex ';

    if (this.props.direction == 'row') {
      c = c + 'f-row ';
      c = this.props.horizontal == 'center' ? c + 'rh-center ' : c;
      c = this.props.horizontal == 'left' ? c + 'rh-left ' : c;
      c = this.props.horizontal == 'right' ? c + 'rh-right ' : c;

      c = this.props.vertical == 'middle' ? c + 'rv-middle ' : c;
      c = this.props.vertical == 'up' ? c + 'rv-up ' : c;
      c = this.props.vertical == 'down' ? c + 'rv-down ' : c;
    } else {
      c = c + 'f-column ';
      c = this.props.horizontal == 'center' ? c + 'ch-center ' : c;
      c = this.props.horizontal == 'left' ? c + 'ch-left ' : c;
      c = this.props.horizontal == 'right' ? c + 'ch-right ' : c;

      c = this.props.vertical == 'middle' ? c + 'cv-middle ' : c;
      c = this.props.vertical == 'up' ? c + 'cv-up ' : c;
      c = this.props.vertical == 'down' ? c + 'cv-down ' : c;
    }
    return c;
  }

  constructor(props: ContainerProps) {
    super(props);
  }
  render() {
    return <div className={this.calculateClass()}>{this.props.children}</div>;
  }
}

export default Flex;
