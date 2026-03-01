import Image from "next/image";

export default function CTABanner() {
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
        {/* Banner — same flex layout as original, padding on wrapper */}
        <div
          className="relative"
          style={{
            padding: "72px 80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "416px",
          }}
        >
          {/* Purple bg with diagonal cuts — absolute behind everything */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#4640DE",
              clipPath: "polygon(130px 0%, 100% 0%, 100% calc(100% - 60px), calc(100% - 130px) 100%, 0% 100%, 0% 60px)",
              zIndex: 0,
            }}
          />

          {/* Left Content — same position as original */}
          <div style={{ maxWidth: "400px", flexShrink: 0, zIndex: 10, position: "relative" }}>
            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "110%",
                color: "#FFFFFF",
                marginBottom: "24px",
              }}
            >
              Start posting
              <br />
              jobs today
            </h2>
            <p
              style={{
                fontFamily: "'Epilogue', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "160%",
                color: "#FFFFFF",
                marginBottom: "32px",
              }}
            >
              Start posting jobs for only $10.
            </p>
            <button
              className="cursor-pointer"
              style={{
                fontFamily: "'Epilogue', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "160%",
                color: "#4640DE",
                backgroundColor: "#FFFFFF",
                padding: "14px 32px",
                border: "none",
              }}
            >
              Sign Up For Free
            </button>
          </div>

          {/* Dashboard — same absolute position, fully visible, NOT clipped */}
          <div
            className="absolute"
            style={{
              right: "70px",
              bottom: "0px",
              width: "564px",
              height: "346px",
              zIndex: 10,
            }}
          >
            <Image
              src="/dashboard.png"
              alt="QuickHire Dashboard Preview"
              width={564}
              height={346}
              style={{
                width: "564px",
                height: "346px",
                objectFit: "contain",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
