import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Patient {
  id: string;
  firstName: string;
  surname: string;
  middleName: string;
  dateOfBirth: string;
  homeAddress: string;
  dateOfRegistration: string;
  matriculationNumber: string;
}

interface ClinicalRecord {
  id: string;
  patientId: string;
  clinicDate: string;
  natureOfAilment: string;
  medicinePrescribed: string;
  procedureUndertaken: string;
  dateOfNextAppointment: string;
}

const ReadAndUpdateRecords: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [clinicalRecords, setClinicalRecords] = useState<ClinicalRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);
  const [editingRecord, setEditingRecord] = useState<ClinicalRecord | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const patientsResponse = await axios.get<Patient[]>('http://localhost:5000/patients');
      setPatients(patientsResponse.data);

      const recordsResponse = await axios.get<ClinicalRecord[]>('http://localhost:5000/clinical-records');
      setClinicalRecords(recordsResponse.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePatient = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/patients/${id}`);
      fetchData(); // Fetch data again to reflect the deletion
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/clinical-records/${id}`);
      fetchData(); // Fetch data again to reflect the deletion
    } catch (error) {
      console.log(error);
    }
  };

  const openEditPatientPopup = (patient: Patient) => {
    setEditingPatient(patient);
  };

  const openEditRecordPopup = (record: ClinicalRecord) => {
    setEditingRecord(record);
  };

  const closeEditPopup = () => {
    setEditingPatient(null);
    setEditingRecord(null);
  };

  const handleUpdatePatient = async (updatedPatient: Patient) => {
    try {
      await axios.put(`http://localhost:5000/patients/${updatedPatient.id}`, updatedPatient);
      closeEditPopup();
      fetchData(); // Fetch data again to reflect the update
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateRecord = async (updatedRecord: ClinicalRecord) => {
    try {
      await axios.put(`http://localhost:5000/clinical-records/${updatedRecord.id}`, updatedRecord);
      closeEditPopup();
      fetchData(); // Fetch data again to reflect the update
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3 className="readthe">Patient Records</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        patients.map((patient) => (
          <div key={patient.id}>
            <p>First Name: {patient.firstName}</p>
            <p>Surname: {patient.surname}</p>
            <p>Middle Name: {patient.middleName}</p>
            <p>Date of Birth: {patient.dateOfBirth}</p>
            <p>Home Address: {patient.homeAddress}</p>
            <p>Date of Registration: {patient.dateOfRegistration}</p>
            <p>Matriculation Number: {patient.matriculationNumber}</p>
            <button onClick={() => deletePatient(patient.id)}>Delete</button>
            <button onClick={() => openEditPatientPopup(patient)}>Edit</button>
          </div>
        ))
      )}

      {editingPatient && (
        <div className="popup">
          <div className="popup-content">
            <h3>Edit Patient</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="firstName"
                value={editingPatient.firstName}
                onChange={(e) => setEditingPatient({ ...editingPatient, firstName: e.target.value })}
              />
              <input
                type="text"
                name="surname"
                value={editingPatient.surname}
                onChange={(e) => setEditingPatient({ ...editingPatient, surname: e.target.value })}
              />
              <input
                type="text"
                name="middleName"
                value={editingPatient.middleName}
                onChange={(e) => setEditingPatient({ ...editingPatient, middleName: e.target.value })}
              />
              <input
                type="date"
                name="dateOfBirth"
                value={editingPatient.dateOfBirth}
                onChange={(e) => setEditingPatient({ ...editingPatient, dateOfBirth: e.target.value })}
              />
              <input
                type="text"
                name="homeAddress"
                value={editingPatient.homeAddress}
                onChange={(e) => setEditingPatient({ ...editingPatient, homeAddress: e.target.value })}
              />
              <input
                type="date"
                name="dateOfRegistration"
                value={editingPatient.dateOfRegistration}
                onChange={(e) => setEditingPatient({ ...editingPatient, dateOfRegistration: e.target.value })}
              />
              <input
                type="text"
                name="matriculationNumber"
                value={editingPatient.matriculationNumber}
                onChange={(e) => setEditingPatient({ ...editingPatient, matriculationNumber: e.target.value })}
              />
              <button onClick={() => handleUpdatePatient(editingPatient)}>Save</button>
              <button onClick={closeEditPopup}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      <h3 className="readthe">Clinical Records</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        clinicalRecords.map((record) => (
          <div key={record.id}>
            <p>Clinic Date: {record.clinicDate}</p>
            <p>Nature of Ailment: {record.natureOfAilment}</p>
            <p>Medicine Prescribed: {record.medicinePrescribed}</p>
            <p>Procedure Undertaken: {record.procedureUndertaken}</p>
            <p>Date of Next Appointment: {record.dateOfNextAppointment}</p>
            <button onClick={() => deleteRecord(record.id)}>Delete</button>
            <button onClick={() => openEditRecordPopup(record)}>Edit</button>
          </div>
        ))
      )}

      {editingRecord && (
        <div className="popup">
          <div className="popup-content">
            <h3>Edit Clinical Record</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="date"
                name="clinicDate"
                value={editingRecord.clinicDate}
                onChange={(e) => setEditingRecord({ ...editingRecord, clinicDate: e.target.value })}
              />
              <input
                type="text"
                name="natureOfAilment"
                value={editingRecord.natureOfAilment}
                onChange={(e) => setEditingRecord({ ...editingRecord, natureOfAilment: e.target.value })}
              />
              <input
                type="text"
                name="medicinePrescribed"
                value={editingRecord.medicinePrescribed}
                onChange={(e) => setEditingRecord({ ...editingRecord, medicinePrescribed: e.target.value })}
              />
              <input
                type="text"
                name="procedureUndertaken"
                value={editingRecord.procedureUndertaken}
                onChange={(e) => setEditingRecord({ ...editingRecord, procedureUndertaken: e.target.value })}
              />
              <input
                type="date"
                name="dateOfNextAppointment"
                value={editingRecord.dateOfNextAppointment}
                onChange={(e) => setEditingRecord({ ...editingRecord, dateOfNextAppointment: e.target.value })}
              />
              <button onClick={() => handleUpdateRecord(editingRecord)}>Save</button>
              <button onClick={closeEditPopup}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadAndUpdateRecords;
