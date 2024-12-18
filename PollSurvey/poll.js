let pollForm = document.getElementById('poll-form');
let pollResults = document.getElementById('poll-results');
let resultOptions = document.getElementById('result-options');

pollForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let question = document.getElementById('question').value;
  let options = document.querySelectorAll('.option');
  let pollData = { question, options: [] };

  options.forEach((option) => {
    pollData.options.push(option.value);
  });

  createPoll(pollData);
});

function createPoll(pollData) {
  pollResults.style.display = 'block';
  let resultsHtml = `<h2>${pollData.question}</h2><ul id="result-options">`;

  pollData.options.forEach((option) => {
    resultsHtml += `<li>${option} (0 votes)</li>`;
  });

  resultsHtml += '</ul>';
  pollResults.innerHTML = resultsHtml;

  let resultOptionsList = document.getElementById('result-options');
  let resultOptionsArray = resultOptionsList.children;

  Array.prototype.forEach.call(resultOptionsArray, (option, index) => {
    option.addEventListener('click', () => {
        let votes = parseInt(option.textContent.match(/\d+/));
        votes++;
        option.textContent = `${pollData.options[index]} (${votes} votes)`;
      });
    });
  }
  
