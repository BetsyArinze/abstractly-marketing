import { navlinks } from "@/app/utils/navlinks";
import Link from "next/link";
import Paragraph from "../ui/Paragraph";
import { socialLinks } from "@/app/utils/socialLinks";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="px-4 pb-4">
      <footer className="flex mt-auto bg-white  rounded-b-md w-full items-center justify-center py-12 md:py-16 lg:py-24 px-8">
        <div className="flex flex-col gap-4 items-center justify-center">
          <ul className="flex gap-4 pb-4">
            {navlinks
              .filter((link) => link.title !== "Home")
              .map((link) => {
                return (
                  <li key={link.title} className="flex gap-8">
                    <Link href={link.path} className="text-neutral-600">
                      {link.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
          <ul className="flex gap-6">
            {socialLinks.map((social) => {
              return (
                <li key={social.name}>
                  <Link href={social.link}>
                    <Image
                      src={social.icon}
                      alt={social.name}
                      height={24}
                      width={24}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div>
            <Paragraph className="text-center">
              © 2024 Abstractly, Inc. All rights reserved.
            </Paragraph>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
