"use client";

import { navlinks } from "@/app/utils/navlinks";
import { abstractlyPaths } from "@/app/utils/paths";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed hidden lg:block pt-4 pb-3 top-0 left-0 w-full z-50 bg-[#F2F3F5]">
        <nav className="flex px-[112px] items-center gap-24">
          <Link href="/" className="flex gap-1 items-center cursor-pointer">
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
          </Link>
          <ul className="flex flex-wrap transition-all flex-1 lg:flex-nowrap gap-5 lg:gap-8 justify-start 2xl:justify-center">
            {navlinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li key={link.title} className="flex gap-8">
                  <Link
                    href={link.path}
                    className={classNames(
                      `hover:border-b-2 hover:border-[#432dd7]`,
                      {
                        "text-[#432dd7]": isActive,
                      }
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-4">
            <Link href={abstractlyPaths.about.path}>
              <button className="bg-white shadow-md px-[16px] py-[10px] rounded-sm cursor-pointer">
                Learn more
              </button>
            </Link>
            <Link href={abstractlyPaths.pricing.path}>
              <button className="bg-indigo-700 shadow-md px-[16px] py-[10px] rounded-sm text-white cursor-pointer">
                See pricing
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DesktopNav;
