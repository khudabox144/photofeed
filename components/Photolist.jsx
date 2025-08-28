"use client";
import PhotoCard from "./PhotoCard"

const PhotoList = ({photos}) => {
  return (
    <div className="img-grid grid grid-cols-3 gap-5 p-4 ">
        {
            photos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
            ))
        }
    </div>
  )
}

export default PhotoList