import React from 'react';
import Large from './Large';
import Small from './Small';
import ResponsiveLayout from './ResponsiveLayout';
import { device } from './WindowDimensionsProvider';

const Content = () => {
  return (
    <ResponsiveLayout
      breakpoint={device.laptop}
      renderSmall={Small}
      renderLarge={Large}
    />
  );
};

export default Content;
