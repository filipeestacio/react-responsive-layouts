import { useWindowDimensions } from '../WindowDimensionsProvider';

const ResponsiveLayout = ({ breakpoint, renderSmall, renderLarge }) => {
  const { width } = useWindowDimensions();
  return breakpoint < width ? renderLarge() : renderSmall();
};

export default ResponsiveLayout;
