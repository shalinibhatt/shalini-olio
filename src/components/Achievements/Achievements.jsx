import SectionWrapper from "../common/SectionWrapper";

function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <h2 className="section-title">Achievements</h2>

      <ul className="achievement-list">
        <li>50k+ App Downloads</li>
        <li>4.5+ Play Store Rating</li>
        <li>React Native 0.68 → 0.77 Migration</li>
        <li>Flipkart GRID 5.0 Level 2 Qualifier</li>
      </ul>
    </SectionWrapper>
  );
}

export default Achievements;
