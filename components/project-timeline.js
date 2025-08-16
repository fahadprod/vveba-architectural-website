'use client'
import { Chrono } from "react-chrono";

export default function ProjectTimeline() {
  const items = [
    {
      title: "January 2023 - February 2023",
      cardTitle: "Design Phase",
      cardSubtitle: "100% Completed",
      cardDetailedText: "Architectural designs and blueprints finalized",
      progress: 100
    },
    {
      title: "February 2023 - April 2023",
      cardTitle: "Foundation Work",
      cardSubtitle: "80% Completed",
      cardDetailedText: "Excavation and concrete foundation poured",
      progress: 80
    },
    {
      title: "April 2023 - July 2023",
      cardTitle: "Structural Construction",
      cardSubtitle: "60% Completed",
      cardDetailedText: "Framing, roofing, and exterior walls completed",
      progress: 60
    },
    {
      title: "July 2023 - September 2023",
      cardTitle: "Interior Finishing",
      cardSubtitle: "20% Completed",
      cardDetailedText: "Drywall, flooring, and interior fixtures installation",
      progress: 20
    },
    {
      title: "September 2023 - November 2023",
      cardTitle: "Landscaping",
      cardSubtitle: "Not Started",
      cardDetailedText: "Final exterior work including plants and pathways",
      progress: 0
    }
  ];

  const getProgressColor = (progress) => {
    if (progress === 100) return '#DBA81B';
    if (progress > 0) return '#f4d377ff';
    return '#e2e8f0';
  };

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-title">PROJECT TIMELINE</h2>
        <p className="timeline-description">
          Visual representation of our construction phases and milestones
        </p>

        <div className="timeline-wrapper">
          <Chrono
            items={items}
            mode="VERTICAL"
            theme={{
              primary: '#DBA81B',
              secondary: '#ffffff',
              cardBgColor: '#ffffff',
              cardForeColor: '#333',
              titleColor: '#DBA81B',
              titleColorActive: '#DBA81B',
            }}
            cardWidth={650}
            cardHeight={180}
            hideControls
            scrollable={{ scrollbar: true }}
            allowDynamicUpdate
          >
            {items.map((item, index) => (
              <div key={index} className="custom-card">
                <div className="progress-indicator" style={{
                  backgroundColor: getProgressColor(item.progress),
                  width: `${item.progress}%`
                }} />
                <h3>{item.cardTitle}</h3>
                <p className="date-range">{item.title}</p>
                <p className="progress-text">Progress: {item.progress}%</p>
                <p className="detailed-text">{item.cardDetailedText}</p>
              </div>
            ))}
          </Chrono>
        </div>

        <div className="timeline-legend">
          <div className="legend-item">
            <div className="legend-color completed"></div>
            <span>Completed</span>
          </div>
          <div className="legend-item">
            <div className="legend-color in-progress"></div>
            <span>In Progress</span>
          </div>
          <div className="legend-item">
            <div className="legend-color not-started"></div>
            <span>Not Started</span>
          </div>
        </div>
      </div>
    </section>
  );
}