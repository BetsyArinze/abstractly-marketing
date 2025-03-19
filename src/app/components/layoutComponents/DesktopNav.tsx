import { navlinks } from "@/app/utils/navlinks";
import Image from "next/image";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <>
      <header className="hidden lg:block z-10 pt-4">
        <nav className="flex px-[112px] items-center gap-24">
          <div className="flex gap-1 items-center cursor-pointer">
            <Image
              src="/abstractlyLogo.png"
              alt="Abstractly"
              width={32}
              height={32}
            />
            <span className="font-bold text-base">Abstractly</span>
          </div>
          <ul className="flex flex-wrap flex-1 lg:flex-nowrap gap-5 lg:gap-8 justify-start">
            {navlinks.map((link) => {
              return (
                <li key={link.title} className="flex gap-8">
                  <Link
                    href={link.path}
                    className="hover:border-b-2 hover:border-[#432dd7] "
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-4">
            <button className="bg-white shadow-md px-[16px] py-[10px] rounded-sm cursor-pointer">
              Learn more
            </button>
            <button className="bg-indigo-700 shadow-md px-[16px] py-[10px] rounded-sm text-white cursor-pointer">
              See pricing
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DesktopNav;
