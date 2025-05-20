const { spawn } = require('child_process');

async function openBrowser(url) {
  const open = (await import('open')).default;
  return open(url);
}

// Start the Next.js dev server
const dev = spawn('npx', ['next', 'dev'], { stdio: ['ignore', 'pipe', 'inherit'], shell: true });

let opened = false;

dev.stdout.on('data', (data) => {
  const text = data.toString();
  process.stdout.write(text);
  if (!opened && text.includes('started server')) {
    opened = true;
    openBrowser('http://localhost:3000');
  }
});

dev.on('close', (code) => process.exit(code));

