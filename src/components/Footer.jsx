import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-200 py-5">
      <div className="container mx-auto text-center">
        <p className="text-sm text-neutral-600">
          © 2025 Created by
          <a
            href="https://github.com/vaghelakrishna"
            target="_blank"
            rel="noreferrer"
            className="text-black font-medium hover:underline ml-1"
          >
            @krishna
          </a>
        </p>
      </div>
    </footer>
  );
}
