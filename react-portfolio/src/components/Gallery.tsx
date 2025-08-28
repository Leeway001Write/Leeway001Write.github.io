import { useState } from 'react'

import '../App.css'
import './styles/Gallery.css'

interface Props {
  images: string[];
}

export default function Gallery({ images }: Props) {
  const [imageIndex, setImageIndex] = useState(null);

  var overlay;
  if (imageIndex != null) {
    overlay = <Overlay
      image={ images[imageIndex] }
      canClickNext={ imageIndex < images.length - 1 }
      canClickPrev={ imageIndex > 0 }
      onClose={ () => setImageIndex(null) }
      onNext={ () => setImageIndex(imageIndex + 1) }
      onPrev={ () => setImageIndex(imageIndex - 1) }
    />
  };

  return (
    <>
      <div className="gallery-frame">
        { images.map((image, i) => (
      		<img className="gallery-image" src={ image } onClick={ () => setImageIndex(i) } alt="image"></img>
        ))}
      </div>

      {overlay}
    </>
  )
}

interface OverlayProps {
  image: string;
  canClickPrev: boolean;
  canClickNext: boolean;
  onClose: React.Dispatch<React.SetStateAction<number>>;
  onNext: React.Dispatch<React.SetStateAction<number>>;
  onPrev: React.Dispatch<React.SetStateAction<number>>;
}

function Overlay({ image, canClickPrev, canClickNext, onClose, onNext, onPrev }) {
  var prevButton, nextButton;
  if (canClickPrev) {
    prevButton = (
      <button className="overlay-prev-button overlay-nav-button" onClick={ onPrev }><b>{"<"}</b></button>
    )
  }
  if (canClickNext) {
    nextButton = (
      <button className="overlay-next-button overlay-nav-button" onClick={ onNext }><b>{">"}</b></button>
    )
  }
  
  return (
    <>
      <div className="overlay-toolbar">
        <button className="overlay-close-button" onClick={ onClose }>x</button>
      </div>
      <div className="overlay-blackout">
        { prevButton }
    		<img className="overlay-image" src={ image } alt="image"></img>
    		{ nextButton }
      </div>
    </>
  )
}
