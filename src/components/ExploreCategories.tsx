"use client";

import Image from "next/image";

const categories = [
  { name: "Design", jobs: "235 jobs available", icon: "/explore-icons/icon1.png" },
  { name: "Sales", jobs: "756 jobs available", icon: "/explore-icons/Icon2.png" },
  { name: "Marketing", jobs: "140 jobs available", icon: "/explore-icons/Icon3.png" },
  { name: "Finance", jobs: "325 jobs available", icon: "/explore-icons/Icon4.png" },
  { name: "Technology", jobs: "436 jobs available", icon: "/explore-icons/Icon5.png" },
  { name: "Engineering", jobs: "542 jobs available", icon: "/explore-icons/Icon6.png" },
  { name: "Business", jobs: "211 jobs available", icon: "/explore-icons/Icon7.png" },
  { name: "Human Resource", jobs: "346 jobs available", icon: "/explore-icons/Icon8.png" },
];

export default function ExploreCategories() {
  return (
    <section className="w-full" style={{ backgroundColor: "#FFFFFF" }}>
      <div
        style={{
          paddingLeft: "max(124px, calc((100vw - 1440px) / 2 + 124px))",
          paddingRight: "max(124px, calc((100vw - 1440px) / 2 + 124px))",
          paddingTop: "72px",
          paddingBottom: "72px",
        }}
      >
        {/* Section Header */}
        <div className="flex items-end justify-between" style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "110%",
              color: "#25324B",
            }}
          >
            Explore by <span style={{ color: "#26A4FF" }}>category</span>
          </h2>
          <button
            className="flex items-center gap-2 cursor-pointer"
            style={{
              fontFamily: "'Epilogue', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "160%",
              color: "#4640DE",
              background: "none",
              border: "none",
            }}
          >
            Show all jobs
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Category Grid — 4x2 */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
          }}
        >
          {categories.map((cat) => {
            const isHighlighted = cat.name === "Marketing";
            return (
              <div
                key={cat.name}
                className="flex flex-col category-card"
                style={{
                  padding: "32px",
                  border: isHighlighted ? "1px solid #4640DE" : "1px solid #D6DDEB",
                  backgroundColor: isHighlighted ? "#4640DE" : "#FFFFFF",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ width: "48px", height: "48px", marginBottom: "32px" }}>
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    width={48}
                    height={48}
                    style={{ width: "48px", height: "48px", objectFit: "contain" }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "120%",
                    color: isHighlighted ? "#FFFFFF" : "#25324B",
                    marginBottom: "12px",
                  }}
                >
                  {cat.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Epilogue', sans-serif",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "160%",
                    color: isHighlighted ? "rgba(255,255,255,0.7)" : "#7C8493",
                  }}
                >
                  {cat.jobs}
                  <span style={{ marginLeft: "8px", color: isHighlighted ? "#FFFFFF" : "#25324B" }}>→</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
