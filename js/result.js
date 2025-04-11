// Function to generate distinct colors
function generateDistinctColors(count) {
  const colors = [];
  const hueStep = 360 / count;

  for (let i = 0; i < count; i++) {
    const hue = (i * hueStep) % 360;
    colors.push(`hsl(${hue}, 85%, 45%)`);
  }

  return colors;
}

// Subjects with 8 items and dynamic colors
const subjects = [
  { name: 'Mathematics', priority: 1 },
  { name: 'Physics', priority: 2 },
  { name: 'Chemistry', priority: 3 },
  { name: 'Biology', priority: 4 },
  { name: 'English', priority: 5 },
  { name: 'History', priority: 6 },
];

// Assign distinct colors
const colors = generateDistinctColors(subjects.length);
subjects.forEach((subject, index) => {
  subject.color = colors[index];
});

const chart = document.getElementById('chart');
const maxPriority = subjects.length;
const barWidthUnit = 100; // pixels per priority level

// Create bars
subjects.forEach((subject) => {
  const barContainer = document.createElement('div');
  barContainer.className = 'bar-container';

  const bar = document.createElement('div');
  bar.className = 'bar';
  // Width is based on priority (1 is widest, 6 is narrowest)
  bar.style.width = `${(maxPriority - subject.priority + 1) * barWidthUnit}px`;
  bar.style.backgroundColor = subject.color;
  bar.textContent = subject.name;

  const priorityLabel = document.createElement('div');
  priorityLabel.className = 'priority-label';
  priorityLabel.textContent = `Priority ${subject.priority}`;

  barContainer.appendChild(bar);
  barContainer.appendChild(priorityLabel);
  chart.appendChild(barContainer);
});
