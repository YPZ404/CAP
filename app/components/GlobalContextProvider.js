import React from 'react';
import { useEffect, useState } from 'react';
import { Patient } from '../model/database/Patient';
import { DatabaseAdapter } from '../model/database/DatabaseAdapter';
import { PatientRepo } from '../model/database/PatientRepo';
import { IncidentReportRepo } from '../model/database/IncidentReportRepo';
import { PreliminaryReportRepo } from '../model/database/PreliminaryReportRepo';
import * as SQLite from 'expo-sqlite';

const DB_FILE = 'measurements.db';

// Contexts
/**
 *
 * @type {React.Context<[Patient, (newPatient: Patient) => void]>}
 */
export const PatientContext = React.createContext(null);

/**
 *
 * @type {React.Context<[number, (newPatient: number) => void]>}
 */
export const ReportIdContext = React.createContext(null);

/**
 *
 * @type {React.Context<[number, (newPatient: number) => void]>}
 */
 export const PrelimReportIdContext = React.createContext(null);

/**
 *
 * @type {React.Context<PatientRepo>}
 */
export const PatientRepoContext = React.createContext(null);

/**
 *
 * @type {React.Context<IncidentReportRepo>}
 */
export const IncidentReportRepoContext = React.createContext(null);

/**
 *
 * @type {React.Context<PreliminaryReportRepo>}
 */
 export const PreliminaryReportRepoContext = React.createContext(null);

/**
 *
 * @type {React.Context<DatabaseAdapter>}
 */
export const DaContext = React.createContext(null);

export const dataContext = React.createContext(0);

export const DaContext2 = React.createContext(null);

export const dataContext2 = React.createContext(0);

export const MemoryCorrectAnswerContext = React.createContext([]);

/**
 * Provider component
 */
export function GlobalContextProvider(props) {
  //Global x,y,z
  const [data, setData] = useState(0);
  const [data2, setData2] = useState(0);

  // Global patient
  const [patient, setPatient] = useState(new Patient(null, 'John', null));

  // Global report id
  const [reportId, setReportId] = useState(null);

  //PrelimReport ReportID
  const [prelimReportId, setPrelimReportId] = useState(0);

  // Global Repositories
  const [patientRepoContext, setPatientRepoContext] = useState(null);
  const [daContext, setDaContext] = useState(null);
  const [daContext2, setDaContext2] = useState(null);
  const [incidentRepoContext, setIncidentRepoContext] = useState(null);
  const [preliminaryReportRepoContext, setPreliminaryReportRepoContext] = useState(null);
  const [memoryCorrectAnswerContext, setMemoryCorrectAnswerContext] = useState([]);





  useEffect(() => {
    DatabaseAdapter.initDatabase(SQLite.openDatabase(DB_FILE)).then((daNew) => {
      setDaContext(daNew);
      setPatientRepoContext(new PatientRepo(daNew));
      setIncidentRepoContext(new IncidentReportRepo(daNew));
      setPreliminaryReportRepoContext(new PreliminaryReportRepo(daNew));
    });
  }, []);

  return (

    <PrelimReportIdContext.Provider value={[prelimReportId, setPrelimReportId]}>
      <ReportIdContext.Provider value={[reportId, setReportId]}>
        <PatientContext.Provider value={[patient, setPatient]}>
          <PatientRepoContext.Provider value={patientRepoContext}>
            <IncidentReportRepoContext.Provider value={incidentRepoContext}>
              <PreliminaryReportRepoContext.Provider value={preliminaryReportRepoContext}>
                <MemoryCorrectAnswerContext.Provider value={[memoryCorrectAnswerContext, setMemoryCorrectAnswerContext]}>
                  <DaContext.Provider value={daContext}>
                    <DaContext2.Provider value={DaContext2}>
                      <dataContext.Provider value={[data, setData]}>
                        <dataContext2.Provider value={[data2, setData2]}>
                          {props.children}
                        </dataContext2.Provider>
                      </dataContext.Provider>
                    </DaContext2.Provider>
                  </DaContext.Provider>
                </MemoryCorrectAnswerContext.Provider>
              </PreliminaryReportRepoContext.Provider>  
            </IncidentReportRepoContext.Provider>
          </PatientRepoContext.Provider>
        </PatientContext.Provider>
      </ReportIdContext.Provider>
    </PrelimReportIdContext.Provider>

  );
}
