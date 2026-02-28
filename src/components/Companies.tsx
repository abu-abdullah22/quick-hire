import Image from "next/image";

const companies = [
  { name: "Vodafone", src: "/vodafone-2017-logo.png", width: 162, height: 36 },
  { name: "Intel", src: "/intel.png", width: 80, height: 32 },
  { name: "Tesla", src: "/TESLA.png", width: 120, height: 28 },
  { name: "AMD", src: "/amd-logo-1.png", width: 100, height: 32 },
  { name: "Talkit", src: "/talkit.png", width: 100, height: 32 },
];

export default function Companies() {
  return (
    <section className="w-full" style={{ backgroundColor: "#FFFFFF" }}>
      <div
        style={{
          paddingLeft: "max(124px, calc((100vw - 1440px) / 2 + 124px))",
          paddingRight: "max(124px, calc((100vw - 1440px) / 2 + 124px))",
          paddingTop: "48px",
          paddingBottom: "48px",
        }}
      >
        {/* Section Title */}
        <p
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "160%",
            color: "#202430",
            opacity: 0.5,
            marginBottom: "32px",
          }}
        >
          Companies we helped grow
        </p>

        {/* Company Logos */}
        <div
          className="flex items-center justify-between"
          style={{ width: "1194px", maxWidth: "100%", height: "40px" }}
        >
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center"
              style={{ opacity: 0.5, filter: "grayscale(100%)" }}
            >
              <Image
                src={company.src}
                alt={company.name}
                width={company.width}
                height={company.height}
                className="object-contain"
                style={{
                  width: `${company.width}px`,
                  height: "auto",
                  maxHeight: "40px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
