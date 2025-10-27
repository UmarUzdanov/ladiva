const fs = require('fs');
const path = require('path');

// Read the mapping.json file
const mappingPath = path.join(__dirname, 'public/architessa_images_downloaded/_mapping.json');
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

// Create CSV header
const csvLines = ['Description,Filename,Original URL'];

// Add each image as a CSV row
mapping.forEach(item => {
  const description = item.original_title.replace(/,/g, ';'); // Replace commas with semicolons in description
  const filename = item.filename;
  const url = item.url;

  csvLines.push(`"${description}","${filename}","${url}"`);
});

// Write to CSV file
const csvContent = csvLines.join('\n');
const outputPath = path.join(__dirname, 'architessa-images-list.csv');
fs.writeFileSync(outputPath, csvContent, 'utf8');

console.log(`✅ CSV created successfully!`);
console.log(`📁 Output: ${outputPath}`);
console.log(`📊 Total images: ${mapping.length}`);
