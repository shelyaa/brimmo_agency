"use client";

import {
  Home,
  MapPin,
  Package,
  ShoppingCart,
  ArrowDownUp,
  Vote,
  LogOut,
} from "@/icons";
import IconButton from "../ui/Buttons/IconButton";
import Link from "next/link";
import {usePathname} from "next/navigation";

const menuItems = [
  {href: "/", icon: <Home />},
  {href: "/packages", icon: <Package />},
  {href: "/locations", icon: <MapPin />},
  {href: "/cart", icon: <ShoppingCart />},
  {href: "/transfers", icon: <ArrowDownUp />},
  {href: "/votes", icon: <Vote />},
];

export default function NavSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-18 h-screen bg- flex flex-col items-center justify-between py-3">
      <div className="flex flex-col items-center gap-4 align-center">
        <div>
          <IconButton variant="secondary">
            <Package />
          </IconButton>
        </div>

        <nav className="flex flex-col mt-35 bg-(--icon-bg) rounded-3xl p-1 gap-1">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <IconButton active={pathname === item.href}>
                {item.icon}
              </IconButton>
            </Link>
          ))}
        </nav>
      </div>

      <IconButton>
        <LogOut className="w-5 h-5" />
      </IconButton>
    </aside>
  );
}
