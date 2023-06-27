import React, { useState } from 'react';
import axios from 'axios';
import ReadRecords from './read';

const PatientRecords: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [dateOfRegistration, setDateOfRegistration] = useState('');
    const [matriculationNumber, setMatriculationNumber] = useState('');

    const changeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const changeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(event.target.value);
    };

    const changeMiddleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMiddleName(event.target.value);
    };

    const changeDateOfBirth = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateOfBirth(event.target.value);
    };

    const changeHomeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHomeAddress(event.target.value);
    };

    const changeDateOfRegistration = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateOfRegistration(event.target.value);
    };

    const changeMatriculationNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatriculationNumber(event.target.value);
    };

    const postData = () => {
        axios.post('http://localhost:5000/patients', {
            firstName,
            surname,
            middleName,
            homeAddress,
            matriculationNumber,
            dateOfBirth,
            dateOfRegistration,
        });
    };

    return (
        <div className="create-form">
            <form onSubmit={postData}>
                <label>First Name</label>
                <p>
                    <input
                        type="text"
                        placeholder="Please Enter your First Name..."
                        onChange={changeFirstName}
                    />
                </p>
                <label>Surname</label>
                <p>
                    <input
                        type="text"
                        placeholder="Enter your Surname..."
                        onChange={changeSurname}
                    />
                </p>
                <label>Middle Name</label>
                <p>
                    <input
                        type="text"
                        placeholder="Enter your Middle Name..."
                        onChange={changeMiddleName}
                    />
                </p>
                <label>Date of Birth</label>
                <p>
                    <input
                        type="date"
                        placeholder="Enter your Date of Birth..."
                        onChange={changeDateOfBirth}
                    />
                </p>
                <label>Home Address</label>
                <p>
                    <input
                        type="text"
                        placeholder="Enter your Home Address..."
                        onChange={changeHomeAddress}
                    />
                </p>
                <label>Date of Registration</label>
                <p>
                    <input
                        type="date"
                        placeholder="Enter the Date of Registration..."
                        onChange={changeDateOfRegistration}
                    />
                </p>
                <label>Matriculation Number</label>
                <p>
                    <input
                        type="text"
                        placeholder="Enter your Matriculation Number..."
                        onChange={changeMatriculationNumber}
                    />
                </p>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
        
    );
};

interface ClinicalRecord {
    clinicDate: Date;
    natureOfAilment: string;
    medicinePrescribed: string;
    procedureUndertaken: string;
    dateOfNextAppointment: Date;
}
const ClinicalRecords: React.FC = () => {
    const [clinicalRecord, setClinicalRecord] = useState<ClinicalRecord>({
        clinicDate: new Date(),
        natureOfAilment: '',
        medicinePrescribed: '',
        procedureUndertaken: '',
        dateOfNextAppointment: new Date(),
    });

    const changeClinicDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClinicalRecord({
            ...clinicalRecord,
            clinicDate: new Date(event.target.value),
        });
    };

    const changeNatureOfAilment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClinicalRecord({
            ...clinicalRecord,
            natureOfAilment: event.target.value,
        });
    };

    const changeMedicinePrescribed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClinicalRecord({
            ...clinicalRecord,
            medicinePrescribed: event.target.value,
        });
    };

    const changeProcedureUndertaken = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClinicalRecord({
            ...clinicalRecord,
            procedureUndertaken: event.target.value,
        });
    };

    const changeDateOfNextAppointment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClinicalRecord({
            ...clinicalRecord,
            dateOfNextAppointment: new Date(event.target.value),
        });
    };

    const postData = () => {
        axios.post('http://localhost:5000/clinical-records', clinicalRecord);
    };

    return (
        <div className="create-form">
        <form onSubmit={postData}>
            <label>Clinic Date</label>
            <p>
                <input
                    type="date"
                    placeholder="Enter Clinic Date..."
                    onChange={changeClinicDate}
                />
            </p>
            <label>Nature of Ailment</label>
            <p>
                <input
                    type="text"
                    placeholder="Enter Nature of Ailment..."
                    onChange={changeNatureOfAilment}
                />
            </p>
            <label>Medicine Prescribed</label>
            <p>
                <input
                    type="text"
                    placeholder="Enter Medicine Prescribed..."
                    onChange={changeMedicinePrescribed}
                />
            </p>
            <label>Procedure Undertaken</label>
            <p>
                <input
                    type="text"
                    placeholder="Enter Procedure Undertaken..."
                    onChange={changeProcedureUndertaken}
                />
            </p>
            <label>Date of Next Appointment</label>
            <p>
                <input
                    type="date"
                    placeholder="Enter Date of Next Appointment..."
                    onChange={changeDateOfNextAppointment}
                />
            </p>
            <button type="submit">
                Submit
            </button>
            </form>
            <ReadRecords />

 </div>
  );

    
};
const CreateRecords: React.FC = () => {
    return (
        <div className="app">
            <h1 className='patienthe'>Patient Records</h1>
            <PatientRecords />
            <h1 className='patienthe'>Clinical Records</h1>
            <ClinicalRecords />
        </div>
    );
};
export default CreateRecords;
