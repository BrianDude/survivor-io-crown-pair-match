import React from "react";
import { Box } from "./Box";

export interface GridState {
  boxImages: (string | null)[];
}

export interface GridProps {
  gridState: GridState;
  updateGridState: (newState: GridState) => void;
}
export const Grid: React.FC<GridProps> = ({ gridState, updateGridState }) => {
  const resetAllBoxes = () => {
    updateGridState({ boxImages: Array(25).fill(null) });
  };

  const resetBox = (index: number) => {
    const newBoxImages = [...gridState.boxImages];
    newBoxImages[index] = null;
    updateGridState({ boxImages: newBoxImages });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      <div className="flex flex-wrap w-11/12 border border-white place-items-center">
        {gridState.boxImages.map((img, index) => (
          <Box
            key={index}
            imageUrl={img}
            onImageSet={(newImage: string) => {
              const newBoxImages = [...gridState.boxImages];
              newBoxImages[index] = newImage;
              updateGridState({ boxImages: newBoxImages });
            }}
            onReset={() => resetBox(index)}
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
};
