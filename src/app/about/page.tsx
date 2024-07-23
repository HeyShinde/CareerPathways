// pages/about.tsx

const AboutPage = () => {
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
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">
          Empowering Students for a Brighter Future
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto">
          <section className="mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--text-color)" }}
            >
              Our Mission
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-color)" }}
            >
              Our website, in collaboration with the Muskurahat Foundation, is
              dedicated to helping students navigate their career paths. We
              provide valuable information and guidance on various career
              opportunities to empower the next generation with the knowledge
              they need to make informed decisions about their futures.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-color)" }}
            >
              By offering insights into different career options, educational
              requirements, and industry trends, we aim to inspire and support
              students as they explore their interests and ambitions. Whether
              you&apos;re looking for detailed career pathways or simply seeking
              advice on how to start your journey, we&apos;re here to guide you
              every step of the way.
            </p>
          </section>

          <section
            className="bg-white shadow-lg rounded-lg p-6 mb-12"
            style={{
              backgroundColor: "var(--background-color)",
              color: "var(--text-color)",
            }}
          >
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--text-color)" }}
            >
              Our Collaboration with Muskurahat Foundation
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-color)" }}
            >
              We are proud to partner with the Muskurahat Foundation, an
              organization dedicated to supporting education and personal
              development for underprivileged students. This collaboration
              allows us to enhance our resources and reach more students who can
              benefit from our career guidance services.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-color)" }}
            >
              Together, we are committed to making a positive impact by
              providing accessible and comprehensive career guidance to students
              in need. Through this partnership, we hope to open doors to new
              opportunities and contribute to the overall development of young
              minds.
            </p>
          </section>

          <section className="text-center">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--text-color)" }}
            >
              Get Involved
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-color)" }}
            >
              Interested in supporting our mission or learning more about our
              initiatives? Feel free to reach out or get involved with the
              Muskurahat Foundation. Together, we can make a difference in the
              lives of many students.
            </p>
            <a
              href="https://www.muskurahatfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="text-white text-center p-4"
        style={{ backgroundColor: "var(--footer-bg-color)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Career Pathways. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
