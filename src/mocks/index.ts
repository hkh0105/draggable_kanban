if (typeof window === 'undefined') {
  console.log('window');
  const server = import('./server');
  server.then((s) => s.server.listen());
} else {
  console.log('browser');
  const worker = import('./browser');
  worker.then((w) => w.worker.start());
}

export {};
