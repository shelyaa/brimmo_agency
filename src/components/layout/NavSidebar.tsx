"use client";

import {
  Home,
  MapPin,
  Package,
  ShoppingCart,
  ArrowDownUp,
  Vote,
  LogOut,
  X,
} from "lucide-react";
import IconButton from "../ui/Buttons/IconButton";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import clsx from "clsx";

const menuItems = [
  {href: "/", icon: <Home />},
  {href: "/dashboard", icon: <Package />},
  {href: "/locations", icon: <MapPin />},
  {href: "/cart", icon: <ShoppingCart />},
  {href: "/transfers", icon: <ArrowDownUp />},
  {href: "/votes", icon: <Vote />},
];

export default function NavSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <IconButton
          onClick={toggleMenu}
          variant="secondary"
          size="lg"
          iconSize={24}
        >
          {isOpen ? <X /> : <Package />}
        </IconButton>
      </div>

      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={clsx(
          "fixed md:static top-0 left-0 z-50 h-screen w-20 bg-white flex flex-col items-center justify-between py-3 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col items-center gap-4">
          <IconButton variant="secondary" iconSize={24} size="lg">
            <Package />
          </IconButton>

          <nav className="flex flex-col bg-(--icon-bg) rounded-3xl p-1 gap-1 mt-25">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} onClick={closeMenu}>
                <IconButton active={pathname === item.href}>
                  {item.icon}
                </IconButton>
              </Link>
            ))}
          </nav>
        </div>

        <IconButton onClick={closeMenu}>
          <LogOut />
        </IconButton>
      </aside>
    </>
  );
}
