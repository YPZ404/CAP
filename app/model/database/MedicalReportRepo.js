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

    async createMedicalReport(report_id, memory_test1_correct_count,memory_test2_correct_count, reaction_test_time_1, reaction_test_time_2,reaction_test_time_3, balance_test1_variance, balance_test1_deviation, balance_test2_variance, balance_test2_deviation) {
      const sql =
        'INSERT INTO MedicalReport (report_id, memory_test1_correct_count,memory_test2_correct_count, reaction_test_time_1, reaction_test_time_2,reaction_test_time_3, balance_test1_variance, balance_test1_deviation, balance_test2_variance, balance_test2_deviation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
  
      return new Promise((resolve, reject) => {
        this.da.runSqlStmt(sql, [report_id, memory_test1_correct_count,memory_test2_correct_count, reaction_test_time_1, reaction_test_time_2,reaction_test_time_3, balance_test1_variance, balance_test1_deviation, balance_test2_variance, balance_test2_deviation]).then((rs) => {
          resolve(rs.insertId);
        }, reject);
      });
    }

    async getCurrentMedicalReportInformation(reportId) {
      if (reportId === undefined || reportId === null) {
        throw 'Invalid reportId';
      }
  
      const sql = `SELECT report_id, memory_test1_correct_count,memory_test2_correct_count, reaction_test_time_1, reaction_test_time_2,reaction_test_time_3, balance_test1_variance, balance_test1_deviation, balance_test2_variance, balance_test2_deviation FROM MedicalReport WHERE report_id = ?;`;
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
    async updateMemoryTestReportResult1(reportId, memory_test1_correct_count){
      
        const rs = await this.da.runSqlStmt(
        `UPDATE MedicalReport SET memory_test1_correct_count = ? WHERE report_id = ?;`,
        [memory_test1_correct_count, reportId],
        );
        return rs.insertId;

    }
    async updateMemoryTestReportResult2(reportId, memory_test2_correct_count){
      
      const rs = await this.da.runSqlStmt(
      `UPDATE MedicalReport SET memory_test2_correct_count = ? WHERE report_id = ?;`,
      [memory_test2_correct_count, reportId],
      );
      return rs.insertId;

  }



  async updateReactionTestResults(reportId, reaction_test_time_1, reaction_test_time_2, reaction_test_time_3){
      
    const rs = await this.da.runSqlStmt(
    `UPDATE MedicalReport SET reaction_test_time_1 = ?, reaction_test_time_2 = ?, reaction_test_time_3 = ? WHERE report_id = ?;`,

    [reaction_test_time_1, reaction_test_time_2, reaction_test_time_3, reportId],

    );
    return rs.insertId;

    }
    async updateBalanceTest1Result(reportId, balance_test1_variance, balance_test1_deviation){
      
      const rs = await this.da.runSqlStmt(
      `UPDATE MedicalReport SET balance_test1_variance = ?, balance_test1_deviation = ? WHERE report_id = ?;`,
      [balance_test1_variance,balance_test1_deviation, reportId],

      );
      return rs.insertId;

  }
  async updateBalanceTest2Result(reportId, balance_test2_variance, balance_test2_deviation){
      
    const rs = await this.da.runSqlStmt(
    `UPDATE MedicalReport SET balance_test2_variance = ?, balance_test2_deviation = ? WHERE report_id = ?;`,
    [balance_test2_variance,balance_test2_deviation, reportId],

    );
    return rs.insertId;

  }
}
  