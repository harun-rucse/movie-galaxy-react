import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";
import Container from "./Container";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [showSearchbar, setShowSearchBar] = useState(false);
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  return (
    <div className="fixed w-full h-[60px] z-50 bg-[#00000040] backdrop-blur">
      <Container>
        <div className="w-full h-[60px] flex items-center justify-between">
          <Link to="/">
            <img
              src="/images/movix-logo.svg"
              alt=""
              className="h-[50px] object-cover"
            />
          </Link>
          <ul className="flex items-center gap-8">
            <Link
              to="/explore/movie"
              className="hidden md:block transition hover:text-[var(--pink)]"
            >
              <li>Movies</li>
            </Link>
            <Link
              to="/explore/tv-shows"
              className="hidden md:block transition hover:text-[var(--pink)]"
            >
              <li>TV Shows</li>
            </Link>

            <HiOutlineSearch
              size={20}
              className="transition hover:text-[var(--pink)] cursor-pointer"
              onClick={() => setShowSearchBar((show) => !show)}
            />

            {showMobileMenu ? (
              <VscChromeClose
                size={20}
                className="md:hidden cursor-pointer"
                onClick={() => setshowMobileMenu(false)}
              />
            ) : (
              <SlMenu
                size={20}
                className="md:hidden cursor-pointer"
                onClick={() => setshowMobileMenu(true)}
              />
            )}
          </ul>
        </div>
        {showMobileMenu && (
          <ul className="md:hidden w-full bg-[var(--black3)] absolute left-0 top-[60px] p-5 flex flex-col gap-8 border-t border-white/20 animate-header-menu">
            <Link
              to="/explore/movie"
              className="transition hover:text-[var(--pink)]"
            >
              <li>Movies</li>
            </Link>
            <Link
              to="/explore/tv"
              className="transition hover:text-[var(--pink)]"
            >
              <li>TV Shows</li>
            </Link>
          </ul>
        )}

        {showSearchbar && (
          <div className="w-full h-[50px] bg-white absolute top-[60px] left-0 animate-header-menu">
            <Container>
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                className="w-full h-[50px] bg-transparent focus:outline-none text-black text-ms md:text-lg px-4 md:px-8 placeholder-gray-500"
              />
              <VscChromeClose
                size={20}
                color="black"
                className="cursor-pointer"
                onClick={() => setShowSearchBar(false)}
              />
            </Container>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Header;
