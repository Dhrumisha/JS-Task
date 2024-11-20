let fileName = "myFile.tsx";

const getFileExtension = (file) => {
   let ext = file.split(".");
    return `Extension: ${ext[ext.length - 1]}`;
}
console.log(getFileExtension(fileName));
