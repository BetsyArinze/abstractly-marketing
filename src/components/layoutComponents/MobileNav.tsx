"use client";

import { navlinks } from "@/app/utils/navlinks";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { useToggle } from "usehooks-ts";

const MobileNav = () => {
  const [menuOpen, toggleMenu] = useToggle(false);
  return (
    <>
      <header
        className={classNames(
          "fixed w-full lg:hidden px-8 pt-4 pb-3  transition-all top-0 left-0 z-50 bg-[#F2F3F5]",
          { "fixed top-0 left-0 bg-white": menuOpen }
        )}
      >
        <nav className="flex flex-col justify-between h-full">
          <div className="flex justify-between  py-[18px]">
            <div className="flex gap-1 items-center">
              <Image
                src="/abstractlyLogo.png"
                alt="Abstractly"
                width={32}
                height={32}
              />
              <span
                className="font-bold text-base text-neutral-900"
                style={{ letterSpacing: "-0.06em" }}
              >
                Abstractly
              </span>
            </div>
            <button
              title="menu-button"
              onClick={toggleMenu}
              className="cursor-pointer"
            >
              {menuOpen ? <RiCloseLine size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
          <ul
            className={classNames(
              "flex flex-col h-full w-full",
              { "flex h-screen": menuOpen },
              { "hidden ": !menuOpen }
            )}
          >
            <div className={classNames("flex flex-col flex-1")}>
              {navlinks.map((link) => {
                return (
                  <li
                    key={link.title}
                    className="flex px-3 py-2"
                    onClick={toggleMenu}
                  >
                    <Link
                      href={link.path}
                      className="hover:border-b-2 hover:border-[#432dd7] "
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className="flex flex-col px-3 gap-4 mt-auto">
              <button className="bg-white shadow-md px-[16px] py-[10px] border border-neutral-200 rounded-sm w-full text-base font-medium">
                Learn more
              </button>
              <button className="bg-indigo-700 shadow-md px-[16px] py-[10px] rounded-sm text-white w-full text-base font-medium">
                See pricing
              </button>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MobileNav;
