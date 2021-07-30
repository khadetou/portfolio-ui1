import Meta from "./Meta";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import Sidebar from "./Navbar/Sidebar";
export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Meta />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div>{children}</div>
    </>
  );
}
