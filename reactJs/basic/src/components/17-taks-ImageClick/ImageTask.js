// this is a parent component
import React, { useState } from "react";
import { array } from "yup";
import ImageList from "./ImageList";

const ImageTask = () => {
  // 1.1- here we have taken images
  const [images, setImages] = useState([
    "images/image.jpg",
    "images/av-1.png",
    "images/av-2.jpg",
    "images/av-3.jpg",
  ]);

  // 2.2- making a state
  const [newImage, setNewImage] = useState("");

  // 3.1- state to set the image in this state
  const [displayImage, setDisplayImage] = useState("");

  // 2.3- to add a textField path in images. assign this to the button
  const handleChange = (e) => {
    setNewImage(e.target.value);
  };

  // 2.4- make a function add on button click. assign this to the button
  const addImage = (index) => {
    setImages([...images, newImage]);

    // 4.1- controlling the textField as making it controlled
    setNewImage("");
  };

  // 5.2- images are in the array, we have to remove it
  const removeImage = (index) => {
    // 5.3- removing the perticular image from the array at an index
    const arr = images.filter((image, i) => i != index);
    setImages(arr);
  };
  return (
    <>
      {/* 3.1- making a div for the presentation  */}
      <div style={{ width: "50vw", height: "40vh", margin: "auto" }}>
        <img src={displayImage} style={{ width: "100%", height: "100%" }} />
      </div>

      {/* 2.1- creating a textField  and a button */}
      <input type="text" onChange={handleChange} value={newImage} />
      <button onClick={addImage}>Add Image</button>

      {/* 1.5- returning image list only */}
      <ImageList
        images={images}
        //3.2- passing that function here as it dispaly that image state here. we know it coming from <ImageList/> so we have to set it there as we
        setDisplayImage={setDisplayImage}
        //5.2 - pass it removeImages and pass it as props
        removeImage={removeImage}
      />
    </>
  );
};
export default ImageTask;
