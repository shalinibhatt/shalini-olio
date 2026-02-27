import SectionWrapper from "../common/SectionWrapper";
import "./Contact.css";

function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="section-title">Let’s Connect</h2>

      {/* Email */}
      <div className="contact-block">
        <p className="contact-email">
          <a href="mailto:shalinibhatt6263@gmail.com">
            shalinibhatt6263@gmail.com
          </a>
        </p>
      </div>

      {/* Technical Writing */}
      <div className="contact-block">
        <p className="contact-label">Technical Writing @medium</p>

        <div className="contact-links vertical">
          <a
            href="https://medium.com/@shalinibhatt9608/target-android-15-api-35-in-react-native-v0-71-no-need-to-upgrade-rn-version-7def2cdb4e0d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Target Android 15 (API 35) in React Native v0.71
          </a>

          <a
            href="https://medium.com/@shalinibhatt9608/reduced-pipeline-time-by-30-react-native-099f4b7d90ed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reduced CI/CD Pipeline Time by 30%
          </a>

          <a
            href="https://medium.com/@shalinibhatt9608/react-native-vision-camera-low-background-opacity-round-corners-a21aae09764d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vision Camera: Fix Background Opacity & Rounded Corners
          </a>
        </div>
      </div>

      {/* Profiles */}
      <div className="contact-block">
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

          <a
            href="https://medium.com/@shalinibhatt9608"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
