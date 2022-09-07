export const TABLES_SQL = [
  // TODO: remove
  `
DROP TABLE IF EXISTS Patient;
  `,
  //TODO: remove
  `
DROP TABLE IF EXISTS IncidentReport;
  `,
  //TODO: remove
  `
DROP TABLE IF EXISTS PreliminaryReport;
  `,
  //TODO: remove
  `
DROP TABLE IF EXISTS MultiResponse;
  `,

  `
DROP TABLE IF EXISTS PreliminaryReport;
  `,  
  //TODO: remove
  `
DROP TABLE IF EXISTS MultiResponsePart;
  `,
  //TODO: remove
  `
DROP TABLE IF EXISTS SingleResponse;
  `,
  // TODO: remove
  `
DROP TABLE IF EXISTS ReactionTest;
`,
  //TODO: remove
  `
DROP TABLE IF EXISTS VOMSSymptoms;
  `,
  //TODO: remove
  `
DROP TABLE IF EXISTS VOMSNPCDistance;
  `,
  `
CREATE TABLE IF NOT EXISTS Patient (
    patient_id INTEGER PRIMARY KEY,
    first_name VARCHAR(200),
    last_name VARCHAR(200),
    age INTEGER,
    weight INTEGER
);`,
`
CREATE TABLE IF NOT EXISTS Account (
    account_id INTEGER PRIMARY KEY,
    first_name VARCHAR(200),
    last_name VARCHAR(200),
    age INTEGER,
    weight INTEGER,
    password VARCHAR(9)
);`,
  //Instance of an incident report
  `
CREATE TABLE IF NOT EXISTS IncidentReport (
    report_id INTEGER PRIMARY KEY,
    patient_id INTEGER REFERENCES Patient(patient_id)
);`,


`
CREATE TABLE IF NOT EXISTS PreliminaryReport (
    report_id INTEGER PRIMARY KEY,
    patient_id INTEGER REFERENCES Patient(patient_id),
    memory_test1_result INTEGER,
    memory_test2_result INTEGER,
    reaction_test_result INTEGER,
    balance_test1_result INTEGER,
    balance_test2_result INTEGER

  );
`
,

`CREATE TABLE IF NOT EXISTS MemoryTestReport (
  mt_id INTEGER PRIMARY KEY,
  report_id INTEGER REFERENCES PreliminaryReport(report_id),
  memory_test_1 INTEGER,
  memory_test_2 INTEGER
);`

,
  //Instance of a multiple part response
  `
CREATE TABLE IF NOT EXISTS MultiResponse (
    mr_id INTEGER PRIMARY KEY,
    report_id INTEGER REFERENCES IncidentReport(report_id),
    description VARCHAR(100),
    UNIQUE(report_id, description)
);`,
  //A part of a multi response
  `
CREATE TABLE IF NOT EXISTS MultiResponsePart (
    mrp_id INTEGER PRIMARY KEY,
    mr_id INTEGER REFERENCES MultiResponse(mr_id)
      ON DELETE CASCADE,
    response VARCHAR(50)
);`,
  // Instance of a single response
  `
CREATE TABLE IF NOT EXISTS SingleResponse (
    sr_id INTEGER PRIMARY KEY,
    report_id INTEGER REFERENCES IncidentReport(report_id),
    response VARCHAR(500),
    description VARCHAR(100),
    UNIQUE(report_id, description)
);
`,
  // Reaction time table that stores times in milliseconds
  `
CREATE TABLE IF NOT EXISTS ReactionTest (
    rt_id INTEGER PRIMARY KEY,
    report_id INTEGER REFERENCES PreliminaryReport(report_id),
    time_attempt_1 INTEGER,
    time_attempt_2 INTEGER,
    time_attempt_3 INTEGER,
    time_average INTEGER,
    grade VARCHAR(10)
);
  `,

  // User responses for symptom check after each VOMS test section
  `
CREATE TABLE IF NOT EXISTS VOMSSymptoms (
    vomsSymptoms_id INTEGER PRIMARY KEY,
    report_id INTEGER REFERENCES IncidentReport(report_id),
    description VARCHAR(100),
    headache_rating INTEGER CHECK(headache_rating >= 0 and headache_rating <= 10),
    nausea_rating INTEGER CHECK(nausea_rating >= 0 and nausea_rating <= 10),
    dizziness_rating INTEGER CHECK(dizziness_rating >= 0 and dizziness_rating <= 10),
    fogginess_rating INTEGER CHECK(fogginess_rating >= 0 and fogginess_rating <= 10)
);
`,

  // User responses for Near Point of Convergence distance input
  `
CREATE TABLE IF NOT EXISTS VOMSNPCDistance (
    vomsNPCDistance_id INTEGER PRIMARY KEY,
    report_id INTEGER REFERENCES IncidentReport(report_id),
    distance FLOAT(20)
);
`,
];
