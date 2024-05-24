import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex align-middle justify-center w-screen h-screen bg-[url('assets/bg.jpg')]">
      {children}
    </div>
  );
};

export default Layout;
