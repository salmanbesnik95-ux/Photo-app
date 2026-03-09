import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Photo } from '../types/Photo';
import { PhotoCard } from './PhotoCard';

// Mock photos in case Supabase is not configured
const MOCK_PHOTOS: Photo[] = [
  {
    id: '1',
    title: 'Mountain Landscape',
    description: 'A beautiful mountain view',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Ocean Sunset',
    description: 'Stunning sunset over the ocean',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    createdAt: new Date().toISOString()
  }
];

export function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const { data, error } = await supabase.from('photos').select('*');
        
        if (error) {
          console.error('Supabase fetch error:', error.message);
          setError(error.message);
          // Fall back to mock photos
          setPhotos(MOCK_PHOTOS);
        } else if (data) {
          setPhotos(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('Failed to fetch photos');
        setPhotos(MOCK_PHOTOS);
      }
    }

    fetchPhotos();
  }, []);

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        <p>Error loading photos: {error}</p>
        <p>Showing mock gallery instead</p>
      </div>
    );
  }

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}