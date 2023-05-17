var config = require("./dbconfig");
const sql = require("mssql");

async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
    console.log(" mathus-error :" + error);
  }
}

async function getdata_withQuery() {
  try {
    let pool = await sql.connect(config);

    // query("*******") 屬於你要擷取的MS SQL資料庫位置
    let res = await pool.request().query("SELECT * FROM dbo.Studen");

    return res.recordsets;
  } catch (error) {
    console.log(" mathus-error :" + error);
  }
}

module.exports = {
  getdata: getdata,
  getdata_withQuery: getdata_withQuery,
};
