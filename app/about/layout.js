import Link from "next/link";

const layout = ({ children }) => {
  console.log("Hello World!");
  return (
    <>
      <nav className="flex list-none gap-20 text-xl items-center justify-center mb-5">
        <Link href="/about/abrogate">
          <li>Abrogate</li>
        </Link>
        <Link href="/about/artless">
          <li>Artless</li>
        </Link>
        <Link href="/about/belie">
          <li>Belie</li>
        </Link>
      </nav>{" "}
      <hr className="mb-15 opacity-70"></hr>
      {children}
    </>
  );
};

export default layout;
