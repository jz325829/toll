import { useState, useEffect } from 'react';

const useOrientation = () => {
  function getOrientation() {
    if (window.innerWidth > 1024) {
      return 'Portrait';
    } if (window.innerHeight > window.innerWidth) {
      return 'Landscape';
    }

    return window.matchMedia('(orientation: portrait)').matches
      ? 'Portrait'
      : 'Landscape';
  }

  const [orientation, setOrientation] = useState<'Portrait' | 'Landscape'>(getOrientation());

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(getOrientation());
    };

    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return orientation;
};

export default useOrientation;
