const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Cấu hình public folder cho CSS, JS, images
app.use(express.static('public'));

// Đọc dữ liệu mẫu
const members = JSON.parse(fs.readFileSync('./data/members.json', 'utf8'));

// Routes
app.get('/', (req, res) => {
  res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/project_list', (req, res) => {
  res.render('project_list');
});

app.get('/project_summary', (req, res) => {
  res.render('project_summary');
});

app.get('/project_timeline', (req, res) => {
  res.render('project_timeline');
});

app.get('/project_board', (req, res) => {
  res.render('project_board');
});

app.get('/project_task', (req, res) => {
  res.render('project_task');
});

app.get('/project_member', (req, res) => {
  res.render('project_member', { members: members });
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});