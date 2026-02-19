import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex flex-1 flex-col">
          <iframe
            src="https://tubeunblock.net/"
            className="h-full w-full flex-1 border-0"
            title="TubeUnblock"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox allow-presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          />
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
