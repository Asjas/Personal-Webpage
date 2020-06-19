import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';
import { log } from './sentry';

// HTTP Security Headers
const addHeaders = {
  'Expect-CT': 'max-age=604800, report-uri https://asjas.report-uri.com/r/d/ct/enforce; report-to default',
  'Referrer-Policy': 'same-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  Server: 'Snoopy',
};

const DEBUG = false;

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event));
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      );
    }

    log(e, event.request);
    event.respondWith(new Response('Internal Error', { status: 500 }));
  }
});

async function handleEvent(event) {
  let options = {};

  try {
    if (DEBUG) {
      options.cacheControl = {
        bypassCache: true,
      };
    }
    const asset = await getAssetFromKV(event, options);

    let response = new Response(asset.body, asset);

    Object.keys(addHeaders).forEach(function(header) {
      response.headers.set(header, addHeaders[header]);
    });

    return response;
  } catch (e) {
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        });

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 });
      } catch (e) {}
    }

    log(e, event.request);
    return new Response(e.message || e.toString(), { status: 500 });
  }
}
