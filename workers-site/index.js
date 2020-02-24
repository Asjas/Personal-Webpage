import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

// HTTP Security Headers
const addHeaders = {
  'Expect-CT': 'max-age=604800, report-uri https://asjas.report-uri.com/r/d/ct/enforce; report-to default',
  'Referrer-Policy': 'same-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'X-CF-Worker': 'true',
  'Report To':
    '{"group":"default","max_age":31536000,"endpoints":[{"url":"https://asjas.report-uri.com/a/d/g"}],"include_subdomains":true}',
};

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = true;

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
  const url = new URL(event.request.url);
  let options = {};

  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  // options.mapRequestToAsset = handlePrefix(/^\/docs/)

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      };
    }
    const asset = await getAssetFromKV(event, options);

    let response = new Response(asset);

    Object.keys(addHeaders).forEach(function(header) {
      response.headers.set(header, addHeaders[header]);
    });

    return response;
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
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
