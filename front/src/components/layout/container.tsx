import React, { FC, ReactNode } from 'react';
import '../../index.scss';
import '../../common.scss';

interface ContainerProps {
  className?: string;
  vertical: 'up' | 'middle' | 'down';
  horizontal: 'left' | 'right' | 'center';
  direction: 'row' | 'column';
  fullWidth: boolean;
  fullHeight: boolean;
  children?: ReactNode;
}

function calculateClass(info: ContainerProps): string {
  let c = info.className + ' background-white d-flex main-content ';

  if (info.direction == 'row') {
    c = c + 'f-row ';
    c = info.horizontal == 'center' ? c + 'rh-center ' : c;
    c = info.horizontal == 'left' ? c + 'rh-left ' : c;
    c = info.horizontal == 'right' ? c + 'rh-right ' : c;

    c = info.vertical == 'middle' ? c + 'rv-middle ' : c;
    c = info.vertical == 'up' ? c + 'rv-up ' : c;
    c = info.vertical == 'down' ? c + 'rv-down ' : c;
  } else {
    c = c + 'f-column ';
    c = info.horizontal == 'center' ? c + 'ch-center ' : c;
    c = info.horizontal == 'left' ? c + 'ch-left ' : c;
    c = info.horizontal == 'right' ? c + 'ch-right ' : c;

    c = info.vertical == 'middle' ? c + 'cv-middle ' : c;
    c = info.vertical == 'up' ? c + 'cv-up ' : c;
    c = info.vertical == 'down' ? c + 'cv-down ' : c;
  }

  c = info.fullHeight ? c + 'min-h-100 h-100vh ' : c;
  c = info.fullWidth ? c + 'w-100 ' : c;

  return c;
}

const Container: FC<ContainerProps> = props => {
  // eslint-disable-next-line react/prop-types
  return <div className={calculateClass(props)}>{props.children}</div>;
};

export default Container;
