import React, { useState } from 'react';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollToTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollToTop)

  return (
    <React.Fragment>
    <button className='scroll-top' 
            onClick={scrollToTop} 
            style={{ display: showScroll ? 'inline-block' : 'none' }}
            >
        <span className="fa fa-angle-up"></span>
    </button>
    </React.Fragment>
  );
}

export default ScrollToTop;