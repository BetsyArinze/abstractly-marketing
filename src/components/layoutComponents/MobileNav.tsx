"use client";

import { navlinks } from "@/app/utils/navlinks";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { useToggle } from "usehooks-ts";
import Button from "../ui/Button";
import { abstractlyPaths } from "@/app/utils/paths";

const MobileNav = () => {
  const [menuOpen, toggleMenu] = useToggle(false);
  return (
    <>
      <header
        className={classNames(
          "fixed w-full lg:hidden px-8 pt-4 pb-3  transition-all top-0 left-0 z-50 bg-gray dark:bg-dark",
          { "fixed top-0 left-0 bg-white dark:bg-dark h-screen": menuOpen }
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
                className="font-bold text-base text-neutral-900 dark:text-neutral-300"
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
              { "flex flex-1 h-full": menuOpen },
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
            <div className="flex flex-col px-3 gap-4 mt-auto pb-10">
              <Link href={abstractlyPaths.about.path} onClick={toggleMenu}>
                <Button variant="secondary" className="w-full">
                  Learn more
                </Button>
              </Link>
              <Link href={abstractlyPaths.pricing.path} onClick={toggleMenu}>
                <Button className="w-full">See pricing</Button>
              </Link>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MobileNav;
