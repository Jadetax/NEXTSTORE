const Footer = () => {
    return (
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us Section */}
            <div>
              <h6 className="text-xl font-semibold mb-4">About Us</h6>
              <p className="text-gray-600">We are committed to providing the best products and services. Your satisfaction is our priority.</p>
            </div>
  
            {/* Quick Links Section */}
            <div>
              <h6 className="text-xl font-semibold mb-4">Quick Links</h6>
              <ul>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              </ul>
            </div>
  
            {/* Contact Us Section */}
            <div>
              <h6 className="text-xl font-semibold mb-4">Contact Us</h6>
              <p className="text-gray-600">Email: support@example.com</p>
              <p className="text-gray-600">Phone: +1 234 567 890</p>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="text-center text-gray-500 mt-10">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  