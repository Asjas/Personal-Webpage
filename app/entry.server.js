import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import Remix from "@remix-run/react/server";
export default function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
    const markup = ReactDOMServer.renderToString(_jsx(Remix, { context: remixContext, url: request.url }, void 0));
    return new Response(`<!DOCTYPE html> ${markup}`, {
        status: responseStatusCode,
        headers: {
            ...Object.fromEntries(responseHeaders),
            "Content-Type": "text/html",
        },
    });
}
