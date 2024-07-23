import Link from "next/link";

const DonateBooksPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      {/* Header */}
      <header
        className="text-white p-6 text-center"
        style={{ backgroundColor: "var(--header-bg-color)" }}
      >
        <h1 className="text-3xl font-bold">Support Our Cause</h1>
        <p className="mt-2 text-lg">Every contribution counts!</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Donate Books Card */}
          <div
            className="shadow-lg rounded-lg p-6 flex flex-col justify-between"
            style={{ backgroundColor: "var(--card-bg-color)" }}
          >
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--text-color)" }}
            >
              Donate Books
            </h2>
            <p className="text-lg mb-4" style={{ color: "var(--text-color)" }}>
              We welcome your book donations to enrich our community&apos;s
              knowledge. Please send your books to the address below.
            </p>
            <p
              className="text-base mb-6"
              style={{ color: "var(--text-color)" }}
            >
              Bungalow no 3, Muskurahat Foundation,
              <br />
              Kondivita Rd, next to Ram mandir,
              <br />
              Kondivita, Andheri East,
              <br />
              Mumbai, Maharashtra 400059
            </p>
          </div>

          {/* Donate Money Card */}
          <div
            className="shadow-lg rounded-lg p-6 flex flex-col justify-between"
            style={{ backgroundColor: "var(--card-bg-color)" }}
          >
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--text-color)" }}
            >
              Donate Money
            </h2>
            <p className="text-lg mb-4" style={{ color: "var(--text-color)" }}>
              Your financial support helps us purchase new books and fund our
              programs. Click below to make a donation.
            </p>
            <Link
              href="https://www.muskurahat.org.in/donate?r=shin3704"
              rel="noopener noreferrer"
              target="_blank"
              className="py-2 px-4 rounded-lg text-lg font-semibold transition duration-300"
              style={{
                backgroundColor: "var(--button-bg-color)",
                color: "var(--link-color)",
              }}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="text-white text-center p-4"
        style={{ backgroundColor: "var(--footer-bg-color)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Muskurahat Foundation. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default DonateBooksPage;
