const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS
app.use(cors({ origin: true }));

// Proxy logic to handle requests dynamically
app.use(
  '/',
  createProxyMiddleware({
    changeOrigin: true,
    router: (req) => {
      const targetUrl = req.query.url;
      if (!targetUrl) {
        throw new Error("Missing 'url' query parameter");
      }
      return targetUrl;  // Dynamically proxy based on the provided URL
    },
    pathRewrite: {
      '^/': '',  // Remove the prefix
    },
    onProxyReq: (proxyReq, req) => {
      proxyReq.removeHeader('origin');  // Remove origin to avoid CORS issues
    },
  })
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
