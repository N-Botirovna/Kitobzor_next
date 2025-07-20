// app/components/header/NavHeader.tsx

'use client'

import Link from "../../../node_modules/next/link";

const NavbarHeader = () => {
  const menuItems = [
    { name: "Home", href: "/", isActive: true },
    { name: "Biz Haqimizda", href: "/about" },
    { name: "Yangi Kitoblar", href: "/new-books" },
    { name: "Yangidek Kitob lar", href: "/used-books" },
    { name: "Do’konlar", href: "/shops" },
    { name: "Aksiya", href: "/sales" },
  ];

  return (
    <div className="border-t border-orange-100">
      <nav className="flex justify-center space-x-6 py-4">
        {menuItems.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6">
            <Link
              href={item.href}
              className={`text-sm font-medium ${
                item.isActive
                  ? "text-[#F05A40] font-bold"
                  : "text-[#2E2F53] hover:text-[#F05A40]"
              }`}
            >
              {item.name}
            </Link>
            {idx !== menuItems.length - 1 && (
              <span className="text-gray-300">|</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NavbarHeader;

