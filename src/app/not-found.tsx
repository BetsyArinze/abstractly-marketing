import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import { abstractlyPaths } from "./utils/paths";

export default function NotFound() {
  return (
    <section className="w-full h-screen px-3 md:px-4 lg:px-24 ">
      <div className="flex flex-col h-full justify-center items-start text-start">
        <Heading style="h6" className="text-indigo-700 font-semibold pb-3">
          Not found
        </Heading>
        <Heading className="font-semibold pb-5 text-5xl">
          We can’t find the page
        </Heading>
        <Paragraph style="xl" className="pb-16">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </Paragraph>
        <Link href={abstractlyPaths.home.path}>
          <Button className="text-sm">Back to home</Button>
        </Link>
      </div>
    </section>
  );
}
