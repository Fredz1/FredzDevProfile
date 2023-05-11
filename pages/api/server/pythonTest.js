const { spawn } = require('child_process');

// Spawn a new process to run the Python interpreter
const pythonProcess = spawn('python', ['path/to/your/python/script.py']);

// Listen for data from the Python process
pythonProcess.stdout.on('data', (data) => {
  console.log(`Data from Python: ${data}`);
});

// Listen for errors from the Python process
pythonProcess.stderr.on('data', (data) => {
  console.error(`Error from Python: ${data}`);
});

// Listen for the Python process to exit
pythonProcess.on('exit', (code) => {
  console.log(`Python process exited with code ${code}`);
});