const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query
  const response = {
    slack_name: "Ejiofor Celestine",
    current_day: "Saturday",
    utc_time: Date.parse('September 9 2023'),
    track: "backend",
    github_file_url: "",
    github_repo_url: "",
    status_code: 200

  }
});

app.listen(PORT, () => console.log('Listening at port 8000'));
