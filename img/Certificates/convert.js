// 1. Define the paths to your installation folders (Note the double backslashes)
const gmPath = "D:\\apps\\GraphicsMagick-1.3.46-Q16"; 
const gsPath = "D:\\apps\\gs\\gs10.06.0\\bin";

// 2. Prepend them to the Node environment PATH
process.env.PATH = `${gmPath};${gsPath};${process.env.PATH}`;


const { fromPath } = require("pdf2pic");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "pdfs");
const outputDir = path.join(__dirname, "images");

// Ensure the output directory exists
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

// Read the directory for PDF files
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file) => {
    if (path.extname(file).toLowerCase() === ".pdf") {
      const pdfPath = path.join(inputDir, file);
      const baseName = path.parse(file).name;

      // Configuration for the output image
      const options = {
        density: 300,             // Output resolution (DPI)
        saveFilename: baseName,   // Keep the original file name
        savePath: outputDir,      // Output folder
        format: "jpg"            // File format
       // width: 2550,              // 8.5 inches at 300 DPI
       // height: 3300              // 11 inches at 300 DPI
      };

      const convertToImage = fromPath(pdfPath, options);
      const pageToConvertAsImage = 1; // Certificates are usually just one page

      convertToImage(pageToConvertAsImage, { responseType: "image" })
        .then((resolve) => {
          console.log(`✅ Successfully converted: ${resolve.name}`);
        })
        .catch((error) => {
          console.error(`❌ Error converting ${file}:`, error);
        });
    }
  });
});