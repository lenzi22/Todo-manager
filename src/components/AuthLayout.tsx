
import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      {children}
    </div>
  );
}

export default AuthLayout;
