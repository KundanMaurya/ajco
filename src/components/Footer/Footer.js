import './Footer.css'


const Footer =()=>{
    return(<>
        <section className="footer">
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>Your CA firm description goes here.</p>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="footer-col">
            <h4>Address</h4>
            <p>123 Main Street, City, Country</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Arun Jamuna & Co. Firm. All Rights Reserved.</p>
      </div>
    </footer>

        </section>
    </>);
}

export default Footer;