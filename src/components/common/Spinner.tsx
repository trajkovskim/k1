import { Spin } from 'antd';
import React from 'react';

// const StyledSpinner = styled(Spin)<{ centered?: boolean }>`
//   @keyframes rotate {
//     from {
//       rotate: 0;
//     }

//     to {
//       rotate: 360deg;
//     }
//   }

//   width: 50px;
//   height: 50px;

//   display: block;
//   margin: ${(props) => props.centered && 'auto'};

//   animation-name: rotate;
//   animation-duration: 1000ms;
//   animation-fill-mode: forwards;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
// `;

type Props = React.ComponentProps<typeof Spin>;

const Spinner: React.FC<Props> = (props) => {
  return <Spin {...props} />;
};

export default Spinner;
