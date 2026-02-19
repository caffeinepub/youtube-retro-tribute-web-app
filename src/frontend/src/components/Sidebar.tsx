import { Home, Video, Clock, Star, Film } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="retro-sidebar hidden w-48 flex-col gap-1 p-3 lg:flex">
      <div className="mb-2">
        <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wide text-gray-600">
          Videos
        </h3>
        <nav className="flex flex-col gap-0.5">
          <SidebarLink icon={<Home className="h-4 w-4" />} label="Home" />
          <SidebarLink icon={<Video className="h-4 w-4" />} label="Videos" />
          <SidebarLink icon={<Film className="h-4 w-4" />} label="Channels" />
        </nav>
      </div>
      
      <div className="mb-2">
        <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wide text-gray-600">
          Categories
        </h3>
        <nav className="flex flex-col gap-0.5">
          <SidebarLink icon={<Star className="h-4 w-4" />} label="Featured" />
          <SidebarLink icon={<Clock className="h-4 w-4" />} label="Most Viewed" />
        </nav>
      </div>
      
      <div className="mt-4 rounded border border-gray-300 bg-white p-3 text-xs">
        <p className="mb-2 font-semibold text-gray-700">About</p>
        <p className="leading-relaxed text-gray-600">
          This is a nostalgic tribute to the classic YouTube design from 2005-2008.
        </p>
      </div>
    </aside>
  );
}

function SidebarLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      className="retro-sidebar-link flex items-center gap-2 rounded px-2 py-1.5 text-sm font-medium transition-colors"
      disabled
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
