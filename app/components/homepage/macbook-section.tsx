"use client";
import { MacbookScroll } from "./macbook-scroll";
import { Link } from "react-router";

export function MacbookSection() {
  return (
    <div className="overflow-hidden bg-background w-full">
      <MacbookScroll
        title={
          <span>
            Create viral content with <br /> AI-powered tools
          </span>
        }
        badge={
          <Link to="/dashboard">
            <div className="flex items-center justify-center space-x-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-zinc-800 transition-colors">
              <span>Try it now →</span>
            </div>
          </Link>
        }
        src="/screen.png"
      />
    </div>
  );
}
