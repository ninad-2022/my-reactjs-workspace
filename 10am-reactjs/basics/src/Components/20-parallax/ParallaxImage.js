import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const ParallaxImge = () => {
  const ref = useRef();
  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer
          speed={0.1}
          style={{
            backgroundImage: `url(https://cdn.mos.cms.futurecdn.net/2LqHAMBULZRsJmpUbJMVqU.jpg)`,
            backgroundSize: "cover",
          }}
        >
          <h2>Layer 1 is here</h2>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.05}
          offset={1}
          style={{
            backgroundImage: `url(https://miro.medium.com/max/300/1*0mvljbKg6JpjF_Yp92hAKQ.gif)`,
            backgroundSize: "cover",
          }}
          sticky={{ start: 0.9, end: 2.5 }}
        >
          <img src="https://qph.cf2.quoracdn.net/main-qimg-581f8f1ab42a2b6ed811da3725900efa-pjlq" />
          <h2>I am Layer 2</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default ParallaxImge;

// npm i @react-spring/parallax
