import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold hover:text-[#00d0f5]">
          MiniBook Store
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/" className="text-white hover:text-[#00d0f5] hover:uppercase hover:font-bold p-[10px]">
            Home
          </Link>

          <Link href="/about" className="text-white hover:text-[#00d0f5] hover:uppercase hover:font-bold p-[10px]">
            About
          </Link>

          <Link href="/menu" className="text-white hover:text-[#00d0f5] hover:uppercase hover:font-bold p-[10px]">
            Menu
          </Link>

          <Link href="/contact" className="text-white hover:text-[#00d0f5] hover:uppercase hover:font-bold p-[10px]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
