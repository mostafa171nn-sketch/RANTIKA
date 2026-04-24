import React, { memo } from 'react';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = memo(function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Rantika🌸</h2>
        <div>
          <p className="footer-text">Elegant flowers &amp; gifts for your special moments</p>
          <h6 className="copy"> © {CURRENT_YEAR} BY.Mostafa Omar | Phone: 01111695090.</h6>
        </div>

        <div className="socials">
          <a href="#" className="icon fb" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H7.9v-2.88h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.52h-1.3c-1.28 0-1.68.8-1.68 1.62v1.95h2.86l-.46 2.88h-2.4v6.99A10 10 0 0 0 22 12z"/>
            </svg>
          </a>
          <a href="#" className="icon ig" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.21 4 20 5.79 20 7.75v8.5c0 1.96-1.79 3.75-3.75 3.75h-8.5C5.79 20 4 18.21 4 16.25v-8.5C4 5.79 5.79 4 7.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </a>
          <a href="#" className="icon wa" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.52 3.48A11.86 11.86 0 0012.03 0C5.39 0 .01 5.38 0 12.02c0 2.12.55 4.19 1.6 6.02L0 24l6.13-1.6a11.96 11.96 0 005.9 1.5h.01c6.64 0 12.02-5.38 12.02-12.02 0-3.21-1.25-6.23-3.54-8.4zM12.04 21.8h-.01a9.8 9.8 0 01-4.99-1.36l-.36-.21-3.64.95.97-3.55-.23-.37a9.8 9.8 0 01-1.5-5.24c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.02 6.95 2.88a9.75 9.75 0 012.88 6.95c0 5.42-4.42 9.83-9.85 9.83zm5.39-7.36c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.78-.73 2.03-1.44.25-.7.25-1.3.18-1.44-.08-.13-.28-.2-.58-.35z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

