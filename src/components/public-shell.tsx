import { PublicFooter } from "./public-footer";
import { PublicNav } from "./public-nav";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicNav />
      {children}
      <PublicFooter />
    </>
  );
}
