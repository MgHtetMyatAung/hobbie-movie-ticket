import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <section className=" fixed top-0 w-full left-0 right-0">
      <nav className=" container mx-auto h-[60px] md:h-[90px] flex justify-between items-center text-gray-50">
        <Link href={"/"}>
          <h2 className=" uppercase font-semibold text-xl">Hobbie</h2>
        </Link>
        <ul className=" flex items-center gap-10 text-[15px] font-semibold">
          <li className=" hover:text-yellow-300 uppercase">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" hover:text-yellow-300 uppercase">
            <Link href={"/"}>Movies</Link>
          </li>
          <li className=" hover:text-yellow-300 uppercase">
            <Link href={"/"}>About Us</Link>
          </li>
        </ul>
        <div className="">
          <Button
            variant="outline"
            className={
              "rounded-full uppercase px-8 font-medium text-base border-2 border-yellow-300 bg-transparent hover:bg-yellow-300 hover:text-gray-800"
            }
          >
            Sign In
          </Button>
        </div>
      </nav>
    </section>
  );
}
