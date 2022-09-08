/**
 * @module
 */

 export class MedicalReportRepo {
    /**
     *
     * @param {DatabaseAdapter} da
     */
    constructor(da) {
      this.da = da;
    }

    async createMemoryTestReport(report_id, memory_test_1,memory_test_2) {
      const sql =
        'INSERT INTO MemoryTestReport (report_id, memory_test_1,memory_test_2) VALUES (?, ?, ?);';
  
      return new Promise((resolve, reject) => {
        this.da.runSqlStmt(sql, [report_id, memory_test_1,memory_test_2]).then((rs) => {
          resolve(rs.insertId);
        }, reject);
      });
    }
  
    async getCurrentMemoryTestReportInformation(reportId) {
      if (reportId === undefined || reportId === null) {
        throw 'Invalid reportId';
      }
  
      const sql = `SELECT report_id, memory_test_1, memory_test_2 FROM MemoryTestReport WHERE report_id = ?;`;
      const args = [reportId];
  
      const rs = await this.da.runSqlStmt(sql, args);
      return rs.rows.item(0);

    }
    /**
     * 
     * @param {number} reportId 
     * @param {number} memory_test_result 
     * @returns 
     */  
    async updateMemoryTestReportResult1(reportId, memory_test_1){
      
        const rs = await this.da.runSqlStmt(
        `UPDATE MemoryTestReport SET memory_test_1 = ? WHERE report_id = ?;`,
        [memory_test_1, reportId],
        );
        return rs.insertId;

    }
    async updateMemoryTestReportResult2(reportId, memory_test_2){
      
      const rs = await this.da.runSqlStmt(
      `UPDATE MemoryTestReport SET memory_test_2 = ? WHERE report_id = ?;`,
      [memory_test_2, reportId],
      );
      return rs.insertId;

  }

  async createReactionTestReport(report_id, time_attempt_1,time_attempt_2, time_attempt_3) {
    const sql =
      'INSERT INTO ReactionTestReport (report_id, time_attempt_1,time_attempt_2, time_attempt_3) VALUES (?, ?, ?, ?);';

    return new Promise((resolve, reject) => {
      this.da.runSqlStmt(sql, [report_id, time_attempt_1,time_attempt_2, time_attempt_3]).then((rs) => {
        resolve(rs.insertId);
      }, reject);
    });
  }
  async getCurrentReactionTestReportInformation(reportId) {
    if (reportId === undefined || reportId === null) {
      throw 'Invalid reportId';
    }

    const sql = `SELECT report_id, time_attempt_1, time_attempt_2, time_attempt_3 FROM ReactionTestReport WHERE report_id = ?;`;
    const args = [reportId];

    const rs = await this.da.runSqlStmt(sql, args);
    return rs.rows.item(0);

  }


  async updateReactionTestResults(reportId, time_attempt_1){
      
    const rs = await this.da.runSqlStmt(
    `UPDATE ReactionTestReport SET time_attempt_1 = ? WHERE report_id = ?;`,

    [time_attempt_1, reportId],

    );
    return rs.insertId;

    }
    async createBalanceTestReport(report_id, balance_test1_variance,balance_test1_deviation, balance_test2_variance, balance_test2_deviation) {
      const sql =
        'INSERT INTO BalanceTestReport (report_id, balance_test1_variance, balance_test1_deviation, balance_test2_variance, balance_test2_deviation) VALUES (?, ?, ?, ?, ?);';
  
      return new Promise((resolve, reject) => {
        this.da.runSqlStmt(sql, [report_id, balance_test1_variance,balance_test1_deviation,balance_test2_variance,balance_test2_deviation]).then((rs) => {
          resolve(rs.insertId);
        }, reject);
      });
    }
    async updateBalanceTest1Result(reportId, balance_test1_variance, balance_test1_deviation){
      
      const rs = await this.da.runSqlStmt(
      `UPDATE BalanceTestReport SET balance_test1_variance = ?, balance_test1_deviation = ? WHERE report_id = ?;`,
      [balance_test1_variance,balance_test1_deviation, reportId],

      );
      return rs.insertId;

  }
  async updateBalanceTest2Result(reportId, balance_test2_variance, balance_test2_deviation){
      
    const rs = await this.da.runSqlStmt(
    `UPDATE BalanceTestReport SET balance_test2_variance = ?, balance_test2_deviation = ? WHERE report_id = ?;`,
    [balance_test2_variance,balance_test2_deviation, reportId],

    );
    return rs.insertId;

}
    async getCurrentBalanceTestReportInformation(reportId) {
      if (reportId === undefined || reportId === null) {
        throw 'Invalid reportId';
      }
  
      const sql = `SELECT report_id, balance_test1_variance,balance_test1_deviation, balance_test2_variance, balance_test2_deviation FROM BalanceTestReport WHERE report_id = ?;`;
      const args = [reportId];
  
      const rs = await this.da.runSqlStmt(sql, args);
      return rs.rows.item(0);
  
    }

    /**
     * 
     * @param {number} reportId 
     * @param {number} memory_test_result 
     * @returns 
     */  

  
    /**
     *
     * @param {number} reportId
     * @param {string} description description of response
     * @param {string} response value of response
     * @return {Promise<number>} promise of single response id
     */
    async setSingleResponse(reportId, description, response) {
      await this.da.runSqlStmt(
        `DELETE FROM SingleResponse WHERE report_id = ? AND description = ?;`,
        [reportId, description],
      );
  
      const rs = await this.da.runSqlStmt(
        `INSERT INTO SingleResponse (report_id, description, response) VALUES (?, ?, ?);`,
        [reportId, description, response],
      );
      return rs.insertId;
    }
  
    /**
     *
     * @param {number} reportId report id
     * @return {Promise<any[]>} array of SingleResponse rows
     */
    async getSingleResponses(reportId) {
      const sql = 'SELECT * FROM SingleResponse WHERE report_id == ?;';
      const args = [reportId];
  
      return new Promise((resolve, reject) => {
        this.da.runSqlStmt(sql, args).then((rs) => {
          if (rs.rows.length < 1) {
            reject(new Error(`No single response in report ${reportId}`));
            return;
          }
          resolve(rs.rows._array);
        });
      });
    }
  
    // async changeSingleResponse(ID, text) {
    //   const sql = 'UPDATE SingleResponse SET response = ? WHERE report_id == ?; ';
    //   const args = [text, ID];
    //
    //   return new Promise((resolve, reject) => {
    //     this.da.runSqlStmt(sql, args).then(
    //       (rs) => resolve(rs.insertId),
    //       (err) => reject(err),
    //     );
    //   });
    // }
  
    /**
     * Store multi response in db
     * @param {number}reportId report id
     * @param {string}description description of response
     * @param {string[]}responses values of responses
     * @return {Promise<number>} resolves with the MultiResponse id
     */
    async setMultiResponse(reportId, description, responses) {
      await this.da.runSqlStmt(
        'DELETE FROM MultiResponse WHERE report_id = ? AND description = ?;',
        [reportId, description],
      );
  
      const rs = await this.da.runSqlStmt(
        'INSERT INTO MultiResponse (report_id, description) VALUES (?, ?);',
        [reportId, description],
      );
      const mrId = rs.insertId;
  
      await this.da.runSqlStmt('DELETE FROM MultiResponsePart WHERE mr_id = ?;', [
        mrId,
      ]);
  
      // Add each part of the response
      for (let res of responses) {
        await this.da.runSqlStmt(
          'INSERT INTO MultiResponsePart (mr_id, response) VALUES (?, ?);',
          [mrId, res],
        );
      }
      return mrId;
    }
  
    /**
     *
     * @param reportId report id
     * @return {Promise<any[]>} array of MultiResponses rows, parts of the multi
     * response are store in .MultiResponsePart
     */
    async getMultiResponses(reportId) {
      let error = null;
      let mrs = null; // multi responses
      await this.da
        .runSqlStmt('SELECT * FROM MultiResponse WHERE report_id == ?;', [
          reportId,
        ])
        .then(
          (rs) => (mrs = rs.rows._array),
          (err) => (error = err),
        );
  
      if (error != null) {
        return new Promise((resolve, reject) => reject(error));
      }
  
      for (let mr of mrs) {
        // Add each of the response parts
        await this.da
          .runSqlStmt('SELECT * FROM MultiResponsePart WHERE mr_id = ?', [
            mr.mr_id,
          ])
          .then(
            (rs) => {
              mr.MultiResponsePart = rs.rows._array;
            },
            (err) => (error = err),
          );
  
        if (error != null) {
          return new Promise((resolve, reject) => reject(error));
        }
      }
  
      console.log(mrs);
  
      return new Promise((resolve) => {
        resolve(mrs);
      });
    }
  
    /**
     * Stores the reaction test results.
     *
     * Removes existing reaction test result if it exists.
     *
     * @param {number} reportId
     * @param {number[]} attempts 3 attempt results
     * @param {number} average
     * @param {string} grade
     * @return {Promise<number>}
     */
    async setReactionTest(reportId, attempts, average, grade) {
      if (attempts.length !== 3) {
        throw `given attempts has length ${attempts.length}, not 3`;
      }
  
      await this.da.runSqlStmt(`DELETE FROM ReactionTest WHERE report_id = ?`, [
        reportId,
      ]);
  
      const rs = await this.da.runSqlStmt(
        `INSERT INTO ReactionTest (report_id, time_attempt_1, time_attempt_2, time_attempt_3, time_average, grade)
          VALUES (?, ?, ?, ?, ?, ?)`,
        [reportId, ...attempts, average, grade],
      );
      return rs.insertId;
    }
  
    /**
     * Returns the reaction test for the report
     * @param reportId
     * @return {Promise<any>}
     */
    async getReactionTest(reportId) {
      if (reportId === undefined || reportId === null) {
        throw 'Invalid reportId';
      }
  
      const sql = `SELECT time_attempt_1, time_attempt_2, time_attempt_3, time_average, grade FROM ReactionTest WHERE report_id = ?;`;
      const args = [reportId];
  
      const rs = await this.da.runSqlStmt(sql, args);
      return rs.rows.item(0);
    }
  
    /**
     * Stores the VOMS symptom ratings of headache, nausea, dizziness and fogginess
     * @param reportId
     * @param description
     * @param headache_rating
     * @param nausea_rating
     * @param dizziness_rating
     * @param fogginess_rating
     * @returns {Promise<number>}
     */
    async addVOMSSymptoms(
      reportId,
      description,
      headache_rating,
      nausea_rating,
      dizziness_rating,
      fogginess_rating,
    ) {
      const sql = `INSERT INTO VOMSSymptoms (report_Id, description, headache_rating, nausea_rating, dizziness_rating, fogginess_rating)
          VALUES (?, ?, ?, ?, ?, ?)`;
      const args = [
        reportId,
        description,
        headache_rating,
        nausea_rating,
        dizziness_rating,
        fogginess_rating,
      ];
  
      const rs = await this.da.runSqlStmt(sql, args);
      return rs.insertId;
    }
  
    async getAllVOMSSymptoms(reportId) {
      if (reportId === undefined || reportId === null) {
        throw 'Invalid reportId';
      }
  
      const sql = `SELECT description, headache_rating, nausea_rating, dizziness_rating, fogginess_rating FROM VOMSSymptoms WHERE report_id = ?;`;
      const args = [reportId];
  
      const rs = await this.da.runSqlStmt(sql, args);
      return rs.rows._array;
    }
  
    async getVOMSSymptoms(reportId, description) {
      if (reportId === undefined || reportId === null) {
        throw 'Invalid reportId';
      }
  
      const sql = `SELECT headache_rating, nausea_rating, dizziness_rating, fogginess_rating FROM VOMSSymptoms WHERE report_id = ? AND description = ?;`;
      const args = [reportId, description];
  
      const rs = await this.da.runSqlStmt(sql, args);
      return rs.rows.item(0);
    }
  
    async addVOMSNPCDistance(reportId, distance) {
      const sql = `INSERT INTO VOMSNPCDistance (report_Id, distance)
          VALUES (?, ?)`;
      const args = [reportId, distance];
  
      const rs = await this.da.runSqlStmt(sql, args);
      return rs.insertId;
    }
  
    async getVOMSNPCDistance(reportId) {
      if (reportId === undefined || reportId === null) {
        throw 'Invalid reportId';
      }
  
      const sql = `SELECT distance FROM VOMSNPCDistance WHERE report_id = ?;`;
      const args = [reportId];
  
      const rs = await this.da.runSqlStmt(sql, args);
      return rs.rows.item(0);
    }
  }
  