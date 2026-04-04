const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'Assets', 'Cls Details.csv');
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
  const name = parts[2].trim();
  
  // Find matching image (e.g., "1.jpg", "47.png")
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
    name,
    image: imagePath,
    focus: "AIML BATCH 2022-2026", 
    status: "GRADUATE"
  };
});

fs.writeFileSync(
  path.join(__dirname, 'src', 'data', 'students.json'),
  JSON.stringify(students, null, 2)
);
console.log('Successfully processed ' + students.length + ' students from Cls Details.csv');
