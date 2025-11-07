import { Link } from "react-router";

export default function FooterSection() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">

        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} Youme AI, All rights reserved
        </span>
      </div>
    </footer>
  );
}
