const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({ margin: 50 });

const outputPath = path.join(__dirname, '../public/resume.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Header
doc.fontSize(24).text('John Doe', { align: 'center' });
doc.fontSize(14).text('Full Stack Developer', { align: 'center' });
doc.moveDown();
doc.fontSize(10).text('Email: your.email@example.com | LinkedIn: linkedin.com/in/yourprofile', { align: 'center' });
doc.moveDown(2);

// Experience
doc.fontSize(18).text('Experience', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).text('Senior Full Stack Developer - Company Name', { continued: true }).fontSize(10).text(' | 2020 - Present');
doc.fontSize(10).text('• Built and maintained multiple web applications using React, Node.js, and PostgreSQL');
doc.text('• Led a team of 3 developers in implementing new features');
doc.text('• Improved application performance by 40% through optimization');
doc.moveDown();

doc.fontSize(12).text('Full Stack Developer - Company Name', { continued: true }).fontSize(10).text(' | 2018 - 2020');
doc.fontSize(10).text('• Developed RESTful APIs using Node.js and Express');
doc.text('• Implemented responsive UI components with React and Tailwind CSS');
doc.moveDown();

// Skills
doc.fontSize(18).text('Technical Skills', { underline: true });
doc.moveDown(0.5);
doc.fontSize(10).text('Languages: Python, JavaScript, TypeScript, SQL');
doc.text('Frameworks: React, Next.js, Node.js, Express');
doc.text('Databases: PostgreSQL, MongoDB');
doc.text('Tools: Git, Docker, AWS');
doc.moveDown();

// Education
doc.fontSize(18).text('Education', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).text('Bachelor of Science in Computer Science');
doc.fontSize(10).text('University Name | 2014 - 2018');

doc.end();

console.log('Resume PDF generated successfully at public/resume.pdf');

