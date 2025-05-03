import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="w-full px-4 bg-background/75 flex flex-col items-center justify-center pb-6 sm:flex-row-reverse sm:justify-between">
      {/* <Socials /> */}
      <section className="mt-8 sm:mt-0">
        <p className="text-center text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()}</span>{" "}
          <Link className="link" href="/">
          mohammad.is-a.dev
          </Link>
          {" | "}
          <Link className="link font-bold" href="/privacy">
            privacy?
          </Link>
        </p>
      </section>
    </footer>
  );
}
