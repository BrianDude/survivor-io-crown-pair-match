import React, { useState } from "react";
import { Modal } from "./Modal";
import bac from "../assets/bac.png";
import bachkim from "../assets/bachkim.png";
import cho from "../assets/cho.png";
import common from "../assets/common.png";
import cong1 from "../assets/cong1.png";
import defaultImg from "../assets/default.png";
import dong from "../assets/dong.png";
import gau from "../assets/gau.png";
import kimcuong from "../assets/kimcuong.png";
import king from "../assets/king.png";
import matseo from "../assets/matseo.png";
import mauden from "../assets/mauden.png";
import meo from "../assets/meo.png";
import Na from "../assets/Na.png";
import ran from "../assets/ran.png";
import robo from "../assets/robo.png";
import tsu from "../assets/tsu.png";
import vuongmieng from "../assets/vuongmieng.png";
import wes from "../assets/wes.png";
import { X } from "lucide-react";

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

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string | null;
  onImageSet: (image: string) => void;
  onReset: () => void;
}

export const Box: React.FC<BoxProps> = ({
  imageUrl,
  onImageSet,
  onReset,
  ...props
}) => {
  const [popup, setPopup] = useState<boolean>(false);

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
        className="w-1/5 p-2 bg-center bg-contain border border-white cursor-pointer aspect-square hover:bg-slate-600"
        onClick={() => {
          setPopup(true);
        }}
        {...props}
      >
        {imageUrl && (
          <button
            className="absolute top-0 right-0 p-1 text-xs text-white bg-red-500"
            onClick={(e) => {
              e.stopPropagation();
              onReset();
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>
    </React.Fragment>
  );
};
