const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'Assets', 'Untitled spreadsheet - Sheet1.csv');
const alumniAssetsDir = path.join(__dirname, 'Assets', 'Alumni Details_AI&ML_22-26');
const publicAlumniDir = path.join(__dirname, 'public', 'alumni');

// Ensure destination exists
if (!fs.existsSync(publicAlumniDir)) {
  fs.mkdirSync(publicAlumniDir, { recursive: true });
}

// Read CSV
const csvData = fs.readFileSync(csvPath, 'utf8');
const lines = csvData.trim().split('\n').slice(1); // skip header

// Gather image files
const files = fs.readdirSync(alumniAssetsDir);

const students = lines.map(line => {
  const parts = line.split(',');
  const idStr = parts[0].trim();
  const id = parseInt(idStr, 10);
  const rollNo = parts[1].trim();
  const firstName = parts[2].trim();
  const lastName = parts[3].trim();
  const gender = parts[4].trim();
  // We'll skip mobile to preserve privacy or keep it if wanted, let's just not display it publicly unless requested
  
  // Find matching image
  // file names are like "1.jpg", "13.jpeg", "28.jpeg", "29.JPG", "47.png", "55.webp"
  const imageRegex = new RegExp(`^${id}\\.(jpg|jpeg|png|webp|JPG|JPEG|PNG)$`);
  const matchingFile = files.find(f => imageRegex.test(f));
  
  let imagePath = null;
  if (matchingFile) {
    // Copy the file
    fs.copyFileSync(
      path.join(alumniAssetsDir, matchingFile),
      path.join(publicAlumniDir, matchingFile)
    );
    imagePath = `/alumni/${matchingFile}`;
  }

  return {
    id,
    rollNo,
    name: `${firstName} ${lastName}`.trim(),
    gender,
    image: imagePath,
    focus: "AIML BATCH 2022-2026", // default placeholder since it's not in CSV
    status: "GRADUATE"
  };
});

fs.writeFileSync(
  path.join(__dirname, 'src', 'data', 'students.json'),
  JSON.stringify(students, null, 2)
);
console.log('Successfully processed ' + students.length + ' students');
