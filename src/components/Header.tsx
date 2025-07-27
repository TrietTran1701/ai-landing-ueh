import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="AI Logo"
            width={89}
            height={89}
            className="mr-2"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#" className="text-white hover:text-cyan transition-colors">
            About us
          </a>
          <a href="#" className="text-white hover:text-cyan transition-colors">
            Competition Categories
          </a>
          <a href="#" className="text-white hover:text-cyan transition-colors">
            Judging Panel
          </a>
          <a href="#" className="text-white hover:text-cyan transition-colors">
            Explore
          </a>
        </div>

        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}