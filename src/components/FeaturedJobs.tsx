import Image from "next/image";

const featuredJobs = [
  {
    logo: "/company-logo/company1.png",
    company: "Revolut",
    title: "Email Marketing",
    type: "Full Time",
    tags: ["Marketing", "Design"],
    description: "Revolut is looking for Email Marketing to help team market products.",
  },
  {
    logo: "/company-logo/company2.png",
    company: "Dropbox",
    title: "Brand Designer",
    type: "Full Time",
    tags: ["Design", "Business"],
    description: "Dropbox is looking for Brand Designer to help the team t...",
  },
  {
    logo: "/company-logo/compnay3.png",
    company: "Pitch",
    title: "Email Marketing",
    type: "Full Time",
    tags: ["Marketing", "Design"],
    description: "Pitch is looking for a Email Marketing to help team market products.",
  },
  {
    logo: "/company-logo/company4.png",
    company: "Blinklist",
    title: "Visual Designer",
    type: "Full Time",
    tags: ["Design", "Business"],
    description: "Blinklist is looking for Visual Designer to help the team d...",
  },
  {
    logo: "/company-logo/compnay5.png",
    company: "ClassPass",
    title: "Product Designer",
    type: "Full Time",
    tags: ["Design", "Business"],
    description: "ClassPass is looking for Product Designer to help the team d...",
  },
  {
    logo: "/company-logo/company6.png",
    company: "Canva",
    title: "Lead Designer",
    type: "Full Time",
    tags: ["Design", "Business"],
    description: "Canva is looking for Lead Designer to help the team design...",
  },
  {
    logo: "/company-logo/comapny7.png",
    company: "GoDaddy",
    title: "Brand Strategist",
    type: "Full Time",
    tags: ["Marketing", "Design"],
    description: "GoDaddy is looking for Brand Strategist to help the team m...",
  },
  {
    logo: "/company-logo/company8.png",
    company: "Twitter",
    title: "Data Analyst",
    type: "Full Time",
    tags: ["Technology", "Business"],
    description: "Twitter is looking for Data Analyst to help the team data...",
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  Marketing: { bg: "#EB85331A", text: "#FFB836" },
  Design: { bg: "#56CDAD1A", text: "#56CDAD" },
  Business: { bg: "#4640DE1A", text: "#4640DE" },
  Technology: { bg: "#FF65501A", text: "#FF6550" },
};

export default function FeaturedJobs() {
  return (
    <section className="w-full">
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
            Featured <span style={{ color: "#26A4FF" }}>jobs</span>
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

        {/* Jobs Grid — 4x2 */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {featuredJobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col relative"
              style={{
                padding: "24px",
                border: "1px solid #D6DDEB",
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* Full Time Badge — top right */}
              <span
                className="absolute"
                style={{
                  top: "24px",
                  right: "24px",
                  fontFamily: "'Epilogue', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "160%",
                  color: "#4640DE",
                  backgroundColor: "transparent",
                  border: "1px solid #4640DE",
                  padding: "4px 12px",
                }}
              >
                {job.type}
              </span>

              {/* Company Logo */}
              <div style={{ width: "48px", height: "48px", marginBottom: "16px" }}>
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={48}
                  height={48}
                  style={{ width: "48px", height: "48px", objectFit: "contain" }}
                />
              </div>

              {/* Card Title — Company Name */}
              <h3
                style={{
                  fontFamily: "'Epilogue', sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "160%",
                  color: "#25324B",
                  marginBottom: "4px",
                }}
              >
                {job.title}
              </h3>

              {/* Subtitle — Company & Type */}
              <p
                style={{
                  fontFamily: "'Epilogue', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "160%",
                  color: "#515B6F",
                  marginBottom: "16px",
                }}
              >
                {job.company} · {job.type}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "160%",
                  color: "#7C8493",
                  marginBottom: "16px",
                }}
              >
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2" style={{ marginTop: "auto" }}>
                {job.tags.map((tag) => {
                  const color = tagColors[tag] || { bg: "#D6DDEB", text: "#515B6F" };
                  return (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Epilogue', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "160%",
                        color: color.text,
                        backgroundColor: color.bg,
                        padding: "4px 12px",
                        borderRadius: "80px",
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
