const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white py-10">
      <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Your AI-powered job portal that connects job seekers and providers
            with intelligent tools for success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-cyan-400 transition">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-cyan-400 transition">
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>Email: support@jobportal.com</li>
            <li>Phone: +1 (800) 555-1234</li>
            <li>Address: 123 AI Street, Tech City</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 border-t border-indigo-700 pt-4 text-sm">
        &copy; 2025 Job Portal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
