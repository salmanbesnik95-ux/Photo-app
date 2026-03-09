import { Photo } from '../types/Photo';

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={photo.url} alt={photo.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-medium">{photo.title}</h3>
        <p className="text-gray-600 mt-2">{photo.description}</p>
      </div>
    </div>
  );
}