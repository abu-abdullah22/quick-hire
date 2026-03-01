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
        {/* Banner Container */}
        <div
          className="relative overflow-hidden"
          style={{
            backgroundColor: "#4640DE",
            padding: "72px 80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "340px",
            clipPath: "polygon(80px 0%, 100% 0%, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0% 100%, 0% 80px)",
          }}
        >
          {/* Left Content */}
          <div style={{ maxWidth: "400px", flexShrink: 0, zIndex: 10 }}>
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

          {/* Right — Dashboard Image */}
          <div
            className="absolute"
            style={{
              right: "70px",
              top: "70px",
              width: "564px",
              height: "346px",
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
                borderRadius: "8px",
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
