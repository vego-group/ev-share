import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-secondary shadow-md">
      <div className="mx-auto flex h-19 w-full max-w-300 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
