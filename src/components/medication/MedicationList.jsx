import { useState, useEffect } from 'react';
import { getMedications } from '../../services/medicationService';
import MedicationCard from './MedicationCard';
import './MedicationList.css';

function MedicationList() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    // Load medications when component mounts
    const loadedMedications = getMedications();
    setMedications(loadedMedications);
  }, []);

  if (medications.length === 0) {
    return (
      <div className="medication-list-empty">
        <p>No medications added yet</p>
        <p className="empty-hint">Tap the + button to add your first medication</p>
      </div>
    );
  }

  return (
    <div className="medication-list">
      {medications.map(medication => (
        <MedicationCard 
          key={medication.id} 
          medication={medication}
        />
      ))}
    </div>
  );
}

export default MedicationList;