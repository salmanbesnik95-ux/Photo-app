import { Gallery } from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
        <Gallery />
      </div>
    </div>
  );
}

export default App;