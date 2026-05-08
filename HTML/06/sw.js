// Service Worker: 特定URLへのリクエストを横取りして任意のステータスコードを返す
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const path = url.pathname;

  if (path.endsWith('/simulate-200')) {
    event.respondWith(new Response('OK', { status: 200, statusText: 'OK' }));
  } else if (path.endsWith('/simulate-401')) {
    event.respondWith(new Response('Unauthorized', { status: 401, statusText: 'Unauthorized' }));
  } else if (path.endsWith('/simulate-404')) {
    event.respondWith(new Response('Not Found', { status: 404, statusText: 'Not Found' }));
  } else if (path.endsWith('/simulate-500')) {
    event.respondWith(new Response('Internal Server Error', { status: 500, statusText: 'Internal Server Error' }));
  } else if (path.endsWith('/simulate-503')) {
    event.respondWith(new Response('Service Unavailable', { status: 503, statusText: 'Service Unavailable' }));
  }
});
