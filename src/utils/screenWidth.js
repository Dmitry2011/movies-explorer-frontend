import React from 'react';

const screenWidth = () => {

  const getScreenWidth = React.useCallback(() => window.innerWidth, []);
  const [screenWidth, setScreenWidth] = React.useState(getScreenWidth());

  React.useEffect(() => {

    function handleScreenResize() {
      setScreenWidth(getScreenWidth());
    };
      // при монтировании ставим обработчик
    window.addEventListener('resize', resizeController, false);

    let resizeTimer;

    function resizeController() {
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          resizeTimer = null;
          handleScreenResize();
        }, 1000); // 1 кадр в секунду
      }
    };
      // убираем при размонтировании
    return () => window.removeEventListener('resize', handleScreenResize);
  }, [getScreenWidth]);

  return screenWidth;
}

export default  screenWidth;
