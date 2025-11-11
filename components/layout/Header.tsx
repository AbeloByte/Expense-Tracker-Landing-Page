"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="container mt-8">
      <div className="w-full md:mx-auto bg-white rounded-full border border-[#DEE5ED] flex items-center justify-between h-16 md:h-[72px] px-4 md:px-6 relative">
        <div className="flex gap-2 items-center">
          <Image src="/images/Logo.png" alt="Logo" width={38} height={38} />
          <span className="font-semibold text-lg md:text-[20px]">
            Expense Scout
          </span>
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-5 items-center font-medium text-foreground-secondary">
          <button className="hover:underline">Features</button>
          <button className="hover:underline">Testimonials</button>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button className="" variant="default" size="lg">
              Get the App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>

        {/* Mobile slide-over menu */}
        {open && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setOpen(false)}
            />

            <aside className="fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-lg p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/Logo.png"
                    alt="Logo"
                    width={30}
                    height={30}
                  />
                  <span className="font-semibold">Expense Scout</span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <HiX size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-2">
                <a
                  href="#features"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium"
                >
                  Testimonials
                </a>
              </nav>

              <div className="mt-auto">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  Get the App
                </Button>
              </div>
            </aside>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
