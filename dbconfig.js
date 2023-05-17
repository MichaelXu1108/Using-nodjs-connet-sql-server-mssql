const config = {
  user: "sa",
  password: "TatungSmart1",
  server: "127.0.0.1",
  database: "SchoolDB",
  options: {
    trustedconnection: true,
    enableArithAbort: true,

    // 若出現
    // node:10212[DEP0123]DeprecationWarning:Setting the TLS ServerName to an IPaddress is not permitted by RFC 6066.This will be ignored in a future version
    // 則添加-------
    trustServerCertificate: true,
    encrypt: false,
    // --------------------------------

    Instancename: "",
  },
  port: 1051,
};

module.exports = config;
