import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy/50 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <span className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                Clarithix
              </span>
            </Link>
            <p className="text-muted-text text-base leading-relaxed">
              Where Complexity Meets Clarity
            </p>
          </div>

          <div>
            <h3 className="text-primary-text font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/academy"
                  className="text-muted-text hover:text-primary-text transition-all duration-300 text-base hover:translate-x-1 inline-block"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-text hover:text-primary-text transition-all duration-300 text-base hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-text hover:text-primary-text transition-all duration-300 text-base hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-text hover:text-primary-text transition-all duration-300 text-base hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary-text font-semibold mb-6 text-lg">Connect</h3>
            <ul className="space-y-3 text-muted-text text-base">
              <li>
                <a href="mailto:demerkarthi@gmail.com" className="hover:text-primary-text transition-colors duration-300">
                  demerkarthi@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:7339347755" className="hover:text-primary-text transition-colors duration-300">
                  +91 7339347755
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-muted-text text-sm">
          <p>&copy; {new Date().getFullYear()} Clarithix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
