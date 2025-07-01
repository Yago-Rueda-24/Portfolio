// components/TimelineItem.jsx
function TimelineItem({ year, title, institution, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h4>{title}</h4>
        <p><strong>{institution}</strong></p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
