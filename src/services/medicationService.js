// Mock data for development
const mockMedications = [
  {
    id: '1',
    name: 'Paracetamol',
    dosage: '500mg',
    times: ['08:00', '20:00'],
    active: true
  },
  {
    id: '2',
    name: 'Amoxicillin',
    dosage: '250mg',
    times: ['09:00', '15:00', '21:00'],
    active: true
  }
];

// Get all medications
export const getMedications = () => {
  return mockMedications;
};

// Add a new medication
export const addMedication = (medication) => {
  const newMedication = {
    ...medication,
    id: Date.now().toString(),
    active: true
  };
  mockMedications.push(newMedication);
  return newMedication;
};

// Delete a medication
export const deleteMedication = (id) => {
  const index = mockMedications.findIndex(med => med.id === id);
  if (index !== -1) {
    mockMedications.splice(index, 1);
    return true;
  }
  return false;
};