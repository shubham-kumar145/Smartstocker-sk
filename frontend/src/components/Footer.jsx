import React from 'react';
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#222] overflow-x-hidden text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-10">
                {/* About */}
                <div>
                    <h3 className="text-gray-300 font-semibold mb-3">ABOUT</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Smartstocker Stories</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Corporate Information</a></li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="text-gray-300 font-semibold mb-3">HELP</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Cancellation & Returns</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                {/* Consumer Policy */}
                <div>
                    <h3 className="text-gray-300 font-semibold mb-3">CONSUMER POLICY</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Cancellation & Returns</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Grievance Redressal</a></li>
                        <li><a href="#">EPR Compliance</a></li>
                    </ul>
                </div>

                {/* Contact & Social */}
                <div>
                    <h3 className="text-gray-300 font-semibold mb-3">Mail Us:</h3>
                    <p className="text-sm leading-relaxed mb-4">
                        Smartstocker Internet Private Limited,<br />
                        Buildings Alyssa, Begonia &<br />
                        Clove Embassy Tech Village,<br />
                        Outer Ring Road, Devarabeesanahalli Village,<br />
                        Bengaluru, 560103,<br />
                        Karnataka, India
                    </p>
                    <h3 className="text-gray-300 font-semibold mb-2">Social:</h3>
                    <div className="flex gap-4 text-white text-lg">
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaYoutube />
                        <FaInstagram />
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-6 py-4 px-6 text-gray-400 text-sm flex flex-wrap justify-between items-center max-w-7xl mx-auto">
                <div className="flex gap-6 flex-wrap">
                    <span className="flex items-center gap-2"><span>🛒</span> Become a Seller</span>
                    <span className="flex items-center gap-2"><span>⚡</span> Advertise</span>
                    <span className="flex items-center gap-2"><span>🎁</span> Gift Cards</span>
                    <span className="flex items-center gap-2"><span>❓</span> Help Center</span>
                </div>
                <div className="mt-4 md:mt-0">
                    © 2007-2025 Smartstocker.com
                </div>
            </div>
        </footer>
    );
};

export default Footer;