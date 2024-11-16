import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css'; 

const ParallaxComponent = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.jarallax');
    jarallax(elements); 

    return () => {
      elements.forEach((element) => {
        const instance = element.jarallax;
        if (instance) {
          instance.destroy(); 
        }
      });
    };
  }, []);

  return (
    <div>
      <div className="jarallax" data-jarallax data-speed="0.5">
        <div className="jarallax-img"></div>
        <img src='/src/assets/images/product-thumb-11.jpg'/>
      </div>
    </div>
  );
};

export default ParallaxComponent;
