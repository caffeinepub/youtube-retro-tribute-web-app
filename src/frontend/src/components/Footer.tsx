import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="retro-footer border-t border-gray-300 bg-gray-100 px-4 py-3 text-center text-xs text-gray-600">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-semibold">About This Project</p>
        <p className="mb-3 leading-relaxed">
          This is a tribute design recreating the nostalgic YouTube interface from 2005-2008. 
          The embedded content is from TubeUnblock. This project is not affiliated 
          with, endorsed by, or connected to YouTube, TubeUnblock, or Google in any way.
        </p>
        <p className="text-gray-500">
          © 2025. Built with <Heart className="inline h-3 w-3 fill-red-500 text-red-500" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
