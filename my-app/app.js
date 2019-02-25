// Load and register pre-caching Service Worker
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('service-worker.js', {
            scope: '/',
          });
        });
      }

      // Redux assumes `process.env.NODE_ENV` exists in the ES module build.
      // https://github.com/reactjs/redux/issues/2907
      window.process = { env: { NODE_ENV: 'production' } };