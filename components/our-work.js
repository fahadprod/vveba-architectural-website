import ReactCompareImage from 'react-compare-image';

export default function BeforeAfterSlider() {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <h2 className="comparison-title">TRANSFORMATION SHOWCASE</h2>
        <p className="comparison-description">
          See the dramatic difference our materials make in architectural projects
        </p>
        
        <div className="comparison-slider">
          <ReactCompareImage
            leftImage="/images/before.jpg"
            rightImage="/images/after.jpg"
            sliderLineColor="#3a86ff"
            sliderLineWidth={3}
            handle={
              <div className="custom-slider-handle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 12L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            }
          />
        </div>
        
        <div className="comparison-labels">
          <span className="comparison-label">Before</span>
          <span className="comparison-label">After</span>
        </div>
      </div>
    </section>
  );
}