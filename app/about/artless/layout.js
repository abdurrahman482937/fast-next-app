import Link from "next/link";

const layout = ({ children }) => {
  return (
    <>
      <nav className="flex list-none gap-20 text-xl items-center justify-center mb-5">
        <Link href="/Unsophisticated">
          <li>Unsophisticated</li>
        </Link>
        <Link href="/Naive">
          <li>Naive</li>
        </Link>
      </nav>{" "}
      <hr className="mb-15 opacity-50"></hr>
      {children}
    </>
  );
};

export default layout;
