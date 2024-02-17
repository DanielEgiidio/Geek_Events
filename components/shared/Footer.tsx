import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex items-center justify-between wrapper p-5 gap-4 text-center sm:flex-row flex-col">
        <Link href="/">
          <div className=" flex items-center">
            <Logo size={25} />
            <h2 className="font-extrabold p-medium-14 pl-2 dark:text-white ">
              Geek Events
            </h2>
          </div>
        </Link>

        <p className="p-medium-12">
          2023 Geek Events. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
