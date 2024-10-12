import type { NextPage } from "next";

import Logo from "../../public/assets/logo.svg";
import Paths from "../../public/assets/paths.svg";
import PageHead from "../_head";

const Plus: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-dark">
      <PageHead description="+" />

      <div className="absolute left-1/2 top-1/2 w-8 -translate-x-1/2 -translate-y-1/2 transform">
        <Logo className="text-light" />
      </div>

      <div className="flex h-full items-center justify-center">
        <Paths />
      </div>
    </div>
  );
};

export default Plus;
