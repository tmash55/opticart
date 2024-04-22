import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-dotted-pattern bg-cover bg-fixed bg-center bg-no-repeat">
      {children}
    </div>
  );
};
export default Layout;
