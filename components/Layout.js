import Meta from "./Meta";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div>{children}</div>
    </>
  );
}
