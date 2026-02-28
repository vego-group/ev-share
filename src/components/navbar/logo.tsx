import Image from "next/image";
import { Link } from "@/i18n/navigation";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="EV Share home"
      className="inline-flex items-center"
    >
      <div className="relative h-20 w-45">
        <Image
          fill
          src="/images/logo.svg"
          alt="EV Share"
          className="object-contain object-center"
          priority
        />
      </div>
    </Link>
  );
}
