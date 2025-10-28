import './MedicationCard.css';

function MedicationCard({ medication }) {
  const { name, dosage, times } = medication;

  return (
    <div className="medication-card">
      <div className="medication-header">
        <h3 className="medication-name">{name}</h3>
        <span className="medication-dosage">{dosage}</span>
      </div>
      
      <div className="medication-times">
        <span className="times-label">Reminder times:</span>
        <div className="times-list">
          {times.map((time, index) => (
            <span key={index} className="time-badge">
              {time}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MedicationCard;