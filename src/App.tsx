import React from "react";
import { Modal } from "./components/Modal";
import bac from "./assets/bac.png";
import bachkim from "./assets/bachkim.png";
import cho from "./assets/cho.png";
import common from "./assets/common.png";
import cong1 from "./assets/cong1.png";
import defaultImg from "./assets/default.png";
import dong from "./assets/dong.png";
import gau from "./assets/gau.png";
import kimcuong from "./assets/kimcuong.png";
import king from "./assets/king.png";
import matseo from "./assets/matseo.png";
import mauden from "./assets/mauden.png";
import meo from "./assets/meo.png";
import Na from "./assets/Na.png";
import ran from "./assets/ran.png";
import robo from "./assets/robo.png";
import tsu from "./assets/tsu.png";
import vuongmieng from "./assets/vuongmieng.png";
import wes from "./assets/wes.png";

const images = [
  gau,
  matseo,
  meo,
  wes,
  cho,
  ran,
  robo,
  mauden,
  common,
  king,
  Na,
  tsu,
  vuongmieng,
  dong,
  bac,
  bachkim,
  kimcuong,
  cong1,
  defaultImg,
];

function App() {
  const [boxImages, setBoxImages] = React.useState(Array(25).fill(null));
  const resetAllBoxes = () => {
    setBoxImages(Array(25).fill(null));
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-screen-md gap-4 mx-auto overflow-hidden w-width">
      <div className="flex flex-wrap w-11/12 border border-white place-items-center">
        {boxImages.map((img, index) => (
          <Box
            key={index}
            imageUrl={img}
            onImageSet={(newImage) => {
              const newBoxImages = [...boxImages];
              newBoxImages[index] = newImage;
              setBoxImages(newBoxImages);
            }}
          />
        ))}
      </div>
      <button
        onClick={resetAllBoxes}
        className="px-4 py-2 mb-4 text-white transition-colors bg-red-500 rounded hover:bg-red-600"
      >
        Reset All Boxes
      </button>
    </div>
  );
}

function Box({
  imageUrl,
  onImageSet,
  ...props
}: {
  imageUrl: string | null;
  onImageSet: (image: string) => void;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [popup, setPopup] = React.useState(false);

  return (
    <React.Fragment>
      <Modal isOpen={popup} onClose={() => setPopup(false)}>
        <div className="flex flex-wrap justify-between w-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-1/5 m-1 cursor-pointer"
              onClick={() => {
                setPopup(false);
                onImageSet(img);
              }}
            />
          ))}
        </div>
      </Modal>
      <div
        style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : "none" }}
        className="w-1/5 p-2 bg-center bg-contain border border-white aspect-square hover:bg-slate-600"
        onClick={() => {
          setPopup(true);
        }}
        {...props}
      />
    </React.Fragment>
  );
}

export default App;
