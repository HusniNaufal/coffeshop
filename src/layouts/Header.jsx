import Link from "next/link";

const HeaderComponent = () => {
  return (
    <>
      <header className="z-10 flex items-center justify-between w-screen py-4 px-16 shadow-md sticky top-0 bg-white border-2">
        <Link href={"/"}>
          <div className="bg-logo bg-cover h-[30px] aspect-[16/9]"></div>
        </Link>
        <nav className="flex gap-12 text-l">
          <Link href={"/about"}>About</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/location"}>Lokasi</Link>
          <Link href={"https://fore.coffee"} className="font-bold text-cci-green">
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
