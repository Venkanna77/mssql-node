let config = require("./dbConfig");
const sql = require("mssql");


async function getDetails(){
    var gry = 'select * from Persons'
     try {
       let pool = await sql.connect(config);
       let persons = await pool.request().query(gry);
       return {"data":persons.recordset};
     } catch (error) {
       console.log(error);
     }
}
module.exports ={
    getDetails
}