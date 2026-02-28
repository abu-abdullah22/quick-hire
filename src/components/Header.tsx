"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full" style={{ backgroundColor: "#F8F8FD" }}>
      <div
        className="flex items-center justify-between"
        style={{
          height: "78px",
          paddingLeft: "max(124px, calc((100vw - 1440px) / 2 + 124px))",
          paddingRight: "max(124px, calc((100vw - 1440px) / 2 + 124px))",
        }}
      >
        {/* Logo + Nav */}
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="QuickHire"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold" style={{ color: "#202430" }}>
              QuickHire
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            <button
              className="transition-colors cursor-pointer"
              style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "160%", color: "#515B6F", background: "none", border: "none" }}
            >
              Find Jobs
            </button>
            <button
              className="transition-colors cursor-pointer"
              style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "160%", color: "#515B6F", background: "none", border: "none" }}
            >
              Browse Companies
            </button>
          </nav>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="transition-colors cursor-pointer"
            style={{
              fontFamily: "'Epilogue', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "160%",
              textAlign: "center",
              color: "#4640DE",
              background: "none",
              border: "none",
            }}
          >
            Login
          </button>
          <div
            className="w-px"
            style={{ height: "48px", backgroundColor: "#D6DDEB" }}
          />
          <button
            className="transition-colors cursor-pointer"
            style={{
              fontFamily: "'Epilogue', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "160%",
              textAlign: "center",
              color: "#FFFFFF",
              backgroundColor: "#4640DE",
              borderRadius: "8px",
              width: "108px",
              height: "50px",
              padding: "12px 24px",
              gap: "10px",
              border: "none",
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex md:hidden flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-button"
          style={{ background: "none", border: "none" }}
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
            style={{ backgroundColor: "#202430" }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: "#202430" }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
            style={{ backgroundColor: "#202430" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-72" : "max-h-0"
        }`}
        style={{
          borderTop: mobileMenuOpen ? "1px solid #D6DDEB" : "none",
        }}
      >
        <nav className="flex flex-col gap-3" style={{ padding: "16px 20px" }}>
          <button
            className="font-medium transition-colors text-left cursor-pointer"
            style={{ fontSize: "16px", color: "#515B6F", background: "none", border: "none" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Find Jobs
          </button>
          <button
            className="font-medium transition-colors text-left cursor-pointer"
            style={{ fontSize: "16px", color: "#515B6F", background: "none", border: "none" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Browse Companies
          </button>
          <hr style={{ borderColor: "#D6DDEB" }} />
          <button
            className="font-bold text-left cursor-pointer"
            style={{ fontSize: "16px", color: "#4640DE", background: "none", border: "none" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Login
          </button>
          <button
            className="w-full text-center font-bold text-white transition-colors cursor-pointer"
            style={{
              fontSize: "16px",
              backgroundColor: "#4640DE",
              borderRadius: "8px",
              padding: "12px 0",
              border: "none",
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}
