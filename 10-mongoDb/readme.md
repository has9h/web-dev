# MongoDB

* NoSQL Database, unlike relational databases
* There are different types: MongoDB is a document Database using JSON like syntax
* Scalable

## Documents

[From the MongoDB 4.0 Manual](https://docs.mongodb.com/manual/)

**Database:** A physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

**Document:** A record in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON.

**Collections:** A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection have a similar or related purpose.

**mongo:** The MongoDB shell. The mongo process starts the MongoDB shell as a daemon connected to either a mongod or mongos instance. The shell has a JavaScript interface.

**mongod:** The MongoDB database server. The mongod process starts the MongoDB server as a daemon. The MongoDB server manages data requests and formats and manages background operations.

MongoDB stores data records as BSON documents, in collections. BSON is a binary representation of JSON documents, though it contains more data types than JSON. MongoDB documents are composed of field-and-value pairs and have the following structure:
````
{
   field1: value1,
   field2: value2,
   field3: value3,
   ...
   fieldN: valueN
}
````
The value of a field can be any of the BSON data types, including other documents, arrays, and arrays of documents. For example, the following document contains values of varying types:
````
var mydoc = {
               _id: ObjectId("5099803df3f4948bd2f98391"),
               name: { first: "Alan", last: "Turing" },
               birth: new Date('Jun 23, 1912'),
               death: new Date('Jun 07, 1954'),
               contribs: [ "Turing machine", "Turing test", "Turingery" ],
               views : NumberLong(1250000)
            }
````
The above fields have the following data types:

**_id** holds an ObjectId:
  * *In MongoDB, each document stored in a collection requires a unique _id field that acts as a primary key. If an inserted document omits the _id field, the MongoDB driver automatically generates an ObjectId for the _id field.*
**name** holds an *embedded document* that contains the fields **first** and **last**.
**birth** and **death** hold values of the *Date* type.
**contribs** holds an *array of strings*.
**views** holds a value of the *NumberLong* type.
