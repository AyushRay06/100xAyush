//Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

function Hehe() {
  const write = new Promise(function (resolve, reject) {
    const fs = require("fs");
    fs.writeFile("a.txt", "Hello Ayushhhhhhhhhhhh", function (err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("FIle Saved");
      }
      fs.readFile("a.txt", "utf-8", function (err, data) {
        resolve(data);
      });
    });
  });
  return write;
}

async function main() {
  const value = await Hehe();
  console.log(value);
}
main();
