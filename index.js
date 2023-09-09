const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;
  if (!(slack_name && track)) return res.status(400).json('Page not found');
  const response = {
    slack_name: 'Ejiofor Celestine',
    current_day: 'Saturday',
    utc_time: new Date.toUTCString(),
    track: 'backend',
    github_file_url:
      'https://github.com/CyberVerse2/hng-stage-1/blob/master/index.js',
    github_repo_url: 'https://github.com/CyberVerse2/hng-stage-1',
    status_code: 200
  };
  res.status(200).json(response);
});

app.listen(PORT, () => console.log('Listening at port 8000'));
