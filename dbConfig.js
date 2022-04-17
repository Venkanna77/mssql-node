const config = {
  user: "venkanna", // sql user
  password: "cos@77948", //sql user password
  server: "127.0.0.1", // if it does not work try- localhost
  database: "MYDataBase",
  options: {
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  port: 1433,
};

module.exports = config;
