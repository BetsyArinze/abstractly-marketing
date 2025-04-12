"use client";

import { navlinks } from "@/app/utils/navlinks";
import { abstractlyPaths } from "@/app/utils/paths";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed hidden lg:block pt-4 pb-3 top-0 left-0 w-full z-50 bg-gray dark:bg-dark">
        <nav className="flex px-[112px] items-center gap-24">
          <Link href="/" className="flex gap-1 items-center cursor-pointer">
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
          </Link>
          <ul className="flex flex-wrap transition-all flex-1 lg:flex-nowrap gap-5 lg:gap-8 justify-start 2xl:justify-center">
            {navlinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li key={link.title} className="flex gap-8">
                  <Link
                    href={link.path}
                    className={classNames(
                      `hover:border-b-2 hover:border-indigo-300`,
                      {
                        "text-[#432dd7] dark:text-indigo-300": isActive,
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
              <Button variant="secondary">Learn more</Button>
            </Link>
            <Link href={abstractlyPaths.pricing.path}>
              <Button>See pricing</Button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DesktopNav;
