"use client";

import Link from "next/link";
import Search from "./search";
import HeaderLogo from "../icons/header-logo";
import { usePathname } from "next/navigation";
import { HamburgerIcon } from "../icons/hamburger-icon";
import HeartIcon from "../icons/heart-icon";
import { useFavourites } from "@/lib/contexts/favourites-context";

export const Header = () => {
  const pathname = usePathname();
  const { favourites } = useFavourites();

  const favouritesLength = favourites.length;
  const hasFavourites = favourites.length > 0;

  const showAlert = () => {
    window.alert("Test alert");
  };
  return (
    <header className="sticky top-0 flex w-full flex-col items-center border-black transition-all duration-300 bg-white z-50">
      <div
        className={`flex h-[56px] w-full items-center justify-between ${
          pathname !== "/podcasts" ? "border-b border-black" : ""
        }`}
      >
        <div className="flex w-full max-w-[56px] justify-center">
          <button type="button">
            <HamburgerIcon />
          </button>
        </div>
        <div className="opacity-1 transition-all duration-300">
          <Link href={"/"}>
            <HeaderLogo />
          </Link>
        </div>
        <div className="text-small flex h-full items-center overflow-hidden px-0 w-full max-w-[80px]">
          <HeartIcon
            isFilled={hasFavourites}
            favouritesCount={favouritesLength}
            onClick={showAlert}
          />
        </div>
      </div>
      {pathname == "/podcasts" && <Search placeholder={"Search"} />}
    </header>
  );
};

export default Header;
