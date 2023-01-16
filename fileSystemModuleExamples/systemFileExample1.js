/* Documentation:
    https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
*/
const fs = require("fs");

/*
    Example #1:
        Reading the files in the directory with a stopping block (Sync),
        meaning we are stopping any process from happening until the 
        files are read.
*/
// let files = fs.readdirSync("./")
// console.log(files)

/*
    Example #2:
        Reading the files in the directory async - does other process while 
        files are being read.
*/

// fs.readdir("./", (error, files) => {
//     if (error) {
//         throw error;
//     }
//     console.log(`These are the files in the current directory ${files}`)
// });

// console.log("Reading Files......");

/*
    Example #3:
        renameSync - will change file into another directory
*/

// fs.renameSync('./file_to_be_move.text', "dir_1/file_to_be_move.text");

/*
    Example #4:
        rmdir - removed directory
        Note: if directory is not empty, directory will not be deleted
*/

// fs.rmdir("./dir_to_delete", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log("./dir_to_delete has been deleted")
// });

// /*
//     Example #5:
//         Move all files into new dir and then delete the dir
// */

// fs.readdirSync("./dir_2").forEach((file) => {
//     console.log(`Removing file ${file}.....`)
//     fs.renameSync(`./dir_2/${file}`, `./dir_3/${file}`)
// })

// fs.rmdirSync("./dir_2")
// console.log("Folder Removed")

// /*
//     Example #6:
//         Reading from a file - readFileSync
// */

// let fileData = fs.readFileSync("./readMeFile.text", "UTF-8");

// console.log(fileData);

// OR

// fs.readFile("./readMeFile.text", "UTF-8", (err, fileData) => {
//     console.log(fileData);
// });

// console.log("Reading File....");


/*
    Example #7:
        Writting and apending to file using
        writeFile and appendFileSync
*/

let md = `
    This is a new file
    ==================

    Hello World!
`;

fs.writeFile('writeFileExample.md', md.trim(), (err) => {
    if (err) {
        throw err
    }
    fs.appendFileSync("writeFileExample.md", "\n\n************\nAppending to File")
    console.log("Markdown was created")
});


/*
    Example #7:
       Creating Dir using existsSync and mkdir
*/
if (fs.existsSync("creatingNewDir")){
    console.log("Directory already exist")
} else {
    fs.mkdir("creatingNewDir", (err) => {
        if (err){
            console.log(`ERROR: Unable to create Dir - ${err}`)
        }
        console.log("Directory Created")
    }
    );
}
