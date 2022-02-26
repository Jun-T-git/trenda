import Link from "next/link";

const Header: React.VFC = () => {
  return (
    <>
      <header className="bg-blue-400 text-white">
        <Link href="/">
          <a>TRENDA</a>
        </Link>
      </header>
    </>
  );
};

export default Header;
