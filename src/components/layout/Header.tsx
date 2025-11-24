import {Bell, Search, Sun} from "lucide-react";
import IconButton from "../ui/Buttons/IconButton";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-18 flex items-center justify-between px-3">
      <div className="flex items-center gap-3">
        <IconButton>
          <Search />
        </IconButton>
      </div>

      <div className="flex items-center gap-3">
        <IconButton>
          <Bell />
        </IconButton>

        <IconButton>
          <Sun />
        </IconButton>

        <div className="rounded-full w-10 h-10 overflow-hidden">
          <Image
            src="/avatar.png"
            alt="User"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
      </div>
    </header>
  );
}
