alasql("CREATE TABLE test (language INT, hello STRING)");
alasql("INSERT INTO test VALUES (1,'Hello!')");
alasql("INSERT INTO test VALUES (2,'Aloha!')");
alasql("INSERT INTO test VALUES (3,'Bonjour!')");
var rs1 = alasql("SELECT * FROM test WHERE language > 1");
console.log('t1', JSON.stringify(rs1));
