import SectionWrapper from "../common/SectionWrapper";
import "./Contact.css";

function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="section-title">Let’s Connect</h2>

      {/* Email */}
      <p className="contact-email">
        <a href="mailto:shalinibhatt6263@gmail.com">
          shalinibhatt6263@gmail.com
        </a>
      </p>

      <p className="contact-subtext">
        React Native Engineer contributing to production EV applications at Baaz
        Bikes with 1L+ downloads and 4.5★ Play Store rating.
      </p>

      {/* Production Apps */}
      <p className="contact-label">Production Applications</p>
      <div className="contact-links">
        <a
          href="https://play.google.com/store/apps/details?id=com.baaz_baazigar&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baazigar – Google Play
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.baaz_electorq&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Runner – Google Play
        </a>
      </div>

      {/* Technical Writing */}
      <p className="contact-label">Technical Writing</p>
      <div className="contact-links">
        <a
          href="https://medium.com/@shalinibhatt9608/target-android-15-api-35-in-react-native-v0-71-no-need-to-upgrade-rn-version-7def2cdb4e0d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Target Android 15 (API 35) in React Native v0.71
        </a>
      </div>

      {/* Profiles */}
      <p className="contact-label">Profiles</p>
      <div className="contact-links">
        <a
          href="https://github.com/shalinibhatt"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shalini-bhatt-2606761bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
