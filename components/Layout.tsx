import React from 'react'
import '../styles/style.css'
import Script from 'next/script'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <main>{children}</main>
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="/" className="logo">Ely Aesthetics</a>
        </div>
        <div className="footer-contact">
          <p>
            Address: <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Ely+Esthetics/@32.7167633,-114.6242984,17z/data=!3m1!4b1!4m6!3m5!1s0x80d6f76ac597dd9f:0x2acce267d196eccd!8m2!3d32.7167633!4d-114.6242984!16s%2Fg%2F11k50850n2?coh=164777&entry=tt&shorturl=1">561 S 4th Ave, Yuma, AZ</a>
          </p>
          <p>
            Message me at: <a href="tel:(928)581-0046">928-581-0046</a> or <a href="https://instagram.com/elyzmanyfacez" target="_blank" rel="noopener">Instagram</a>
          </p>
          <div className="social-links">
            <a href="https://instagram.com/elyzmanyfacez" target="_blank" rel="noopener">
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-legal">
          <p>&copy; {new Date().getFullYear()} Ely Aesthetics. All rights reserved.</p>
          <a href="/privacy">Privacy Policy</a>&nbsp;|&nbsp;<a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
    <Script src="/main.js" strategy="afterInteractive" />
  </>
)

export default Layout
