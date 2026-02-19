import { Search } from 'lucide-react';

export function Header() {
  return (
    <header className="retro-header flex items-center justify-between px-4 py-2 shadow-md md:px-6">
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <img 
            src="/assets/generated/youtube-retro-logo-transparent.dim_200x60.png" 
            alt="YouTube" 
            className="h-10 w-auto md:h-12"
          />
        </div>
      </div>
      
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="retro-search-container flex w-full max-w-xl items-center">
          <input
            type="text"
            placeholder="Search"
            className="retro-search-input flex-1 px-3 py-1.5 text-sm outline-none md:text-base"
            disabled
          />
          <button 
            className="retro-search-button px-4 py-1.5 text-sm font-medium md:px-6 md:text-base"
            disabled
          >
            <Search className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
      
      <div className="hidden items-center gap-4 md:flex">
        <span className="retro-nav-link cursor-not-allowed text-sm font-medium">
          Sign Up
        </span>
        <span className="retro-nav-link cursor-not-allowed text-sm font-medium">
          Log In
        </span>
      </div>
    </header>
  );
}
