const fs=require('fs')

// fs.writeFileSync("./output/temp.txt",'this is a temporary file')
console.log('temp file created')

if(fs.existsSync('./output/temp.txt')){
    console.log("file exist")

    fs.unlinkSync('./output/temp.txt')
    console.log("file is deleted");
}

//delete kora file re aber delete kortesi 
try {
  fs.unlinkSync("./output/temp.txt");
} catch (error) {
  console.log("ERROR :", error.message);
}

//sync system done
//async system start*****


fs.writeFile("./output/temp2.txt", "Aother temp file", (err) => {
  if (err) return console.error(err.message);

  console.log("Another temp file created");

  fs.unlink("./output/temp2.txt", (err) => {
    if (err) {
      console.error("Error :", err.message);
    } else {
      console.log("Temp2 deleted");
    }
  });
});