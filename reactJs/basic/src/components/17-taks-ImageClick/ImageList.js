import React from "react";

// 1.2- take a func comp and pass{image} props
// 3.3- passing that function as a props in the parent
// 5.2- removeImage as a props
const ImageList = ({ images, setDisplayImage, removeImage }) => {
  return (
    // 1.3- style to dispay image in a line
    <section
      style={{ display: "flex", backgroundColor: "red", overflow: "auto" }}
    >
      {/* 1.4- make an array and use map method, pass keys and image  */}
      {Array.isArray(images) &&
        images.map((image, i) => {
          return (
            <div
              key={image + i}
              style={{
                width: 150,
                height: 150,
                border: "2px solid #999",
                margin: 5,
                flexShrink: 0,
                position: "relative",
              }}
              //3.4- using that function here onClick
              onClick={() => setDisplayImage(image)}
            >
              {/* 5.1- cancelation button  */}
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "blue",
                  color: "#fff",
                  border: "3px solid #fff",
                  borderRadius: "0 5px",
                  cursor: "pointer",
                }}
                //5.3- passing index
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage(i);
                }}
              >
                X
              </span>
              <img src={image} style={{ width: "100%" }} />
            </div>
          );
        })}
    </section>
  );
};

export default ImageList;
