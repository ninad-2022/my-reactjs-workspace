// hello
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  // maintainig a classes and props
  image: ({ blurVal, gray, opa }) => ({
    width: 500,
    filter: `blur(${blurVal}px) grayscale(${gray}) opacity(${opa})`,
  }),
});

const ImageStyle = () => {
  // maintainig a state
  const [styles, setStyles] = useState({
    blurVal: 10,
    gray: 0,
    opa: 1,
  });

  const classes = useStyles({ ...styles });
  return (
    <>
      <h1>Image Styling</h1>
      <img src="images/image.jpg" className={classes.image} />
      <input
        type="range"
        min="0"
        max="15"
        // accessign the props in classes and targeting the range value. parseInt for converting into integer
        onChange={(e) =>
          setStyles({ ...styles, blurVal: parseInt(e.target.value) })
        }
      />
      <input
        type="range"
        min="0"
        max="10"
        onChange={(e) =>
          // divide by 10 to have gradual values
          setStyles({ ...styles, opa: parseInt(e.target.value) / 10 })
        }
      />
      <button
        onClick={(e) =>
          setStyles({ ...styles, gray: styles.gray == 0 ? 1 : 0 })
        }
      >
        Grayscale
      </button>
    </>
  );
};

export default ImageStyle;

// instaling MUI
// npm install @mui/material @emotion/react @emotion/styled
{
  /* <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/> */
}
// npm install @mui/icons-material
