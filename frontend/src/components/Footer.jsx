const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Hello. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
          Crafted with loveee for a safer web.
        </p>
      </div>
    </footer>
  );
};

export default Footer;