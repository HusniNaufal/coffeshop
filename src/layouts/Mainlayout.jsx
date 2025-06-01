import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
export default function Mainlayout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-[200vh]">
        <HeaderComponent />
        <div className="flex-grow px-16">{children}</div>
        <FooterComponent />
      </div>
    </>
  );
}
