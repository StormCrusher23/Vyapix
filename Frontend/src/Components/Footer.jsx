import React from "react";
import "./components.css"
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="text-lg mb-4">© 2024 StockSync. All rights reserved.</p>
                <ul className="flex space-x-6 text-lg font-medium">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;