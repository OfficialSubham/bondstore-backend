const Footer = () => {
  return (
    <footer className="w-full bg-black text-center  text-white py-6">
      <div className="max-w-3xl mx-auto text-sm px-4 flex flex-col items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-gray-400 font-toreadore">
          © {new Date().getFullYear()} Bond Store. All rights reserved.
        </p>

        {/* Developer credit */}
        <p className="text-gray-400">
          Developed & Maintained by{" "}
          <a
            href="https://twitter.com/codersubham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline font-medium"
          >
            CoderSubham
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
