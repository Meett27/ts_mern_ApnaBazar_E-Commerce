// import { MDBFooter } from 'mdb-react-ui-kit';

// const Footer = () => {
//   return <div>
//     <MDBFooter bgColor='light' className='text-center text-lg-left'>
//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         &copy; {new Date().getFullYear()} Copyright:{' '}
//         <a className='text-dark' href='#'>
//           Ecommercewebsite.com
//         </a>
//       </div>
//     </MDBFooter>
//   </div>
// }

// export default Footer

// Footer.tsx
// Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-primary text-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>Apna Bazar</h5>
            <p>&copy; {new Date().getFullYear()} Apna Bazar</p>
          </div>
          <div className="col-lg-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/privacy-policy" className="text-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/sitemap" className="text-light">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Contact Us</h5>
            <p>
              123 Main St<br />
              City, Country 12345<br />
              contact@example.com
            </p>
          </div>
          <div className="col-lg-3">
            <h5>Stay Connected</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




