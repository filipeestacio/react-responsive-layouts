import React, { createContext, useContext, useState, useEffect } from 'react';

const device = {
  mobileS: '320',
  mobileM: '375',
  mobileL: '425',
  tablet: '768',
  laptop: '1024',
  laptopL: '1440',
  desktop: '2560',
};

const WindowDimensionContext = createContext(null);
const useWindowDimensions = () => useContext(WindowDimensionContext);

const WindowDimensionProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <WindowDimensionContext.Provider value={dimensions}>
      {children}
    </WindowDimensionContext.Provider>
  );
};

export default WindowDimensionProvider;
export { device, useWindowDimensions };
