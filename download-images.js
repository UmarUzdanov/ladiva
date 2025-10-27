const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// CSV file path
const CSV_FILE = './image_url_Title.csv';
const OUTPUT_DIR = './public/architessa_images_downloaded';

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✓ Created directory: ${OUTPUT_DIR}`);
}

// Function to sanitize filename
function sanitizeFilename(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '')     // Remove leading/trailing hyphens
    .substring(0, 100);            // Limit length
}

// Function to get file extension from URL
function getExtension(url) {
  const match = url.match(/\.(jpg|jpeg|png|webp|gif|svg)(\?|$)/i);
  return match ? match[1].toLowerCase() : 'jpg';
}

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlinkSync(filepath);
        reject(err);
      });
    }).on('error', reject);
  });
}

// Parse CSV and download images
async function processCSV() {
  try {
    // Check if CSV file exists
    if (!fs.existsSync(CSV_FILE)) {
      console.error(`❌ CSV file not found: ${CSV_FILE}`);
      console.log('\nPlease place your image_url_Title.csv file in the project root directory.');
      process.exit(1);
    }

    const csvContent = fs.readFileSync(CSV_FILE, 'utf-8');
    const lines = csvContent.split('\n').filter(line => line.trim());

    console.log(`\n📊 Found ${lines.length} lines in CSV`);

    // Skip header row if it exists
    const startIndex = lines[0].toLowerCase().includes('url') || lines[0].toLowerCase().includes('title') ? 1 : 0;
    const dataLines = lines.slice(startIndex);

    console.log(`📥 Processing ${dataLines.length} images...\n`);

    const results = {
      success: [],
      failed: [],
      mapping: []
    };

    for (let i = 0; i < dataLines.length; i++) {
      const line = dataLines[i].trim();
      if (!line) continue;

      // Parse CSV line (handles quotes and commas)
      const match = line.match(/^"?([^",]+)"?,\s*"?([^"]+)"?$/);

      if (!match) {
        console.log(`⚠️  Skipping invalid line ${i + 1}: ${line.substring(0, 50)}...`);
        continue;
      }

      const [, url, title] = match;

      if (!url || !title) {
        console.log(`⚠️  Skipping line ${i + 1}: Missing URL or title`);
        continue;
      }

      const cleanUrl = url.trim().replace(/^"|"$/g, '');
      const cleanTitle = title.trim().replace(/^"|"$/g, '');

      // Create filename
      const sanitizedTitle = sanitizeFilename(cleanTitle);
      const extension = getExtension(cleanUrl);
      const filename = `${sanitizedTitle}.${extension}`;
      const filepath = path.join(OUTPUT_DIR, filename);

      try {
        process.stdout.write(`[${i + 1}/${dataLines.length}] Downloading: ${filename}... `);

        await downloadImage(cleanUrl, filepath);

        console.log('✓');
        results.success.push(filename);
        results.mapping.push({
          original_title: cleanTitle,
          filename: filename,
          url: cleanUrl
        });
      } catch (error) {
        console.log(`✗ (${error.message})`);
        results.failed.push({ filename, error: error.message, url: cleanUrl });
      }

      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Save mapping file
    const mappingFile = path.join(OUTPUT_DIR, '_mapping.json');
    fs.writeFileSync(mappingFile, JSON.stringify(results.mapping, null, 2));

    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 DOWNLOAD SUMMARY');
    console.log('='.repeat(60));
    console.log(`✓ Successfully downloaded: ${results.success.length} images`);
    console.log(`✗ Failed downloads: ${results.failed.length} images`);
    console.log(`📁 Output directory: ${OUTPUT_DIR}`);
    console.log(`📄 Mapping file: ${mappingFile}`);

    if (results.failed.length > 0) {
      console.log('\n❌ Failed downloads:');
      results.failed.forEach(({ filename, error }) => {
        console.log(`   - ${filename}: ${error}`);
      });
    }

    console.log('\n✨ Done!\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
processCSV();