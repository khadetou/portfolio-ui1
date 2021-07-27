import Meta from "./Meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div>{children}</div>
    </>
  );
}
