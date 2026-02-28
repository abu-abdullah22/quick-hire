import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "716px", backgroundColor: "#F8F8FD" }}>
      {/* Left Content — z-20 so search bar renders on top of the hero image */}
      <div
        className="relative flex flex-col justify-center"
        style={{
          zIndex: 20,
          paddingLeft: "max(124px, calc((100vw - 1440px) / 2 + 124px))",
          paddingTop: "80px",
          paddingBottom: "80px",
          maxWidth: "60%",
        }}
      >
        <h1
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 600,
            fontSize: "72px",
            lineHeight: "110%",
            letterSpacing: "0%",
            color: "#25324B",
            maxWidth: "533px",
          }}
        >
          Discover
          <br />
          more than
          <br />
          <span className="relative inline-block" style={{ color: "#26A4FF" }}>
            5000+ Jobs
            <svg
              className="absolute left-0 w-full"
              style={{ bottom: "-8px" }}
              height="12"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8C40 2 80 2 120 5C160 8 200 4 240 6C270 8 290 5 298 7"
                stroke="#26A4FF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M5 10C50 5 90 4 130 7C170 10 210 6 250 8C280 10 295 7 298 9"
                stroke="#26A4FF"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </span>
        </h1>

        <p
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "160%",
            color: "#515B6F",
            opacity: 0.7,
            marginTop: "24px",
            maxWidth: "521px",
          }}
        >
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>

        {/* Search Bar — z-20 so it renders on top of the hero image */}
        <div
          className="flex items-stretch"
          style={{
            position: "relative",
            zIndex: 20,
            marginTop: "40px",
            width: "852px",
            maxWidth: "100%",
            height: "89px",
            padding: "16px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8E8E8",
            boxShadow: "0 6px 22px rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex items-center" style={{ width: "305.5px", height: "57px", gap: "16px", paddingLeft: "16px", paddingRight: "16px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" style={{ color: "#515B6F" }}>
              <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="text"
              placeholder="Job title or keyword"
              className="w-full bg-transparent focus:outline-none"
              style={{ fontSize: "15px", color: "#202430" }}
              id="job-search-input"
            />
          </div>
          <div className="self-stretch" style={{ width: "1px", backgroundColor: "#E8E8E8" }} />
          <div className="flex items-center" style={{ width: "305.5px", height: "57px", gap: "16px", paddingLeft: "8px", paddingRight: "24px" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" style={{ color: "#515B6F" }}>
              <path d="M10 11.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3.016 7.075c1.175-5.091 12.8-5.083 13.967.009.683 2.991-1.183 5.524-2.808 7.083a3.07 3.07 0 0 1-3.909 0c-1.633-1.559-3.5-4.1-2.805-7.092Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <select className="w-full appearance-none bg-transparent font-medium focus:outline-none" style={{ fontSize: "15px", color: "#202430" }} id="location-select" defaultValue="Florence, Italy">
              <option>Florence, Italy</option>
              <option>New York, USA</option>
              <option>London, UK</option>
              <option>Remote</option>
            </select>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" style={{ color: "#515B6F" }}>
              <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <button className="font-bold text-white transition-colors shrink-0" style={{ backgroundColor: "#4640DE", padding: "16px 32px", fontSize: "16px" }} id="search-button">
            Search my job
          </button>
        </div>

        {/* Popular Keywords */}
        <p
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontSize: "16px",
            lineHeight: "160%",
            color: "#202430",
            opacity: 0.7,
            marginTop: "16px",
            maxWidth: "412px",
          }}
        >
          <span style={{ fontWeight: 500 }}>Popular : </span>
          <span style={{ fontWeight: 400 }}>UI Designer, UX Researcher, Android, Admin</span>
        </p>
      </div>

      {/* Background Pattern — positioned at Figma's left: 580px from the 1440px frame */}
      <Image
        src="/Pattern.png"
        alt=""
        width={860}
        height={794}
        className="absolute select-none pointer-events-none"
        style={{
          left: "calc(max(0px, (100vw - 1440px) / 2) + 580px)",
          top: "0",
          width: "860px",
          height: "794px",
          objectFit: "contain",
          opacity: 1,
          zIndex: 5,
        }}
        aria-hidden="true"
      />

      {/* Right Side — hero image */}
      <div
        className="absolute top-0 bottom-0 flex items-end"
        style={{
          left: "calc(max(124px, calc((100vw - 1440px) / 2 + 124px)) + 521px + 140px)",
          right: "0",
          zIndex: 10,
        }}
      >

        {/* Hero Image */}
        <Image
          src="/hero.png"
          alt="Professional ready to find their next job"
          width={500}
          height={580}
          className="relative object-contain"
          style={{
            zIndex: 10,
            width: "auto",
            height: "90%",
            maxHeight: "640px",
          }}
          priority
        />
      </div>
    </section>
  );
}
