import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Meta, Links, Scripts } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import tailwind from "css:./styles/tailwind.css";
import styles from "css:./styles/global.css";
export const links = () => [
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: styles },
];
export default function App() {
    return (_jsxs("html", Object.assign({ lang: "en" }, { children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }, void 0),
                    _jsx(Meta, {}, void 0),
                    _jsx(Links, {}, void 0)] }, void 0),
            _jsx("body", Object.assign({ className: "w-full max-w-2xl px-5 py-8 mx-auto bg-imperial-black" }, { children: _jsxs("article", Object.assign({ className: "prose lg:prose-xl" }, { children: [_jsx(Outlet, {}, void 0),
                        _jsx(Scripts, {}, void 0)] }), void 0) }), void 0)] }), void 0));
}
export function ErrorBoundary({ error }) {
    return (_jsxs("html", Object.assign({ lang: "en" }, { children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }, void 0),
                    _jsx("title", { children: "Oops!" }, void 0)] }, void 0),
            _jsxs("body", { children: [_jsxs("div", { children: [_jsx("h1", { children: "App Error" }, void 0),
                            _jsx("pre", { children: error.message }, void 0),
                            _jsxs("p", { children: ["Replace this UI with what you want users to see when your app throws uncaught errors. The file is at", " ",
                                    _jsx("code", { children: "app/App.tsx" }, void 0), "."] }, void 0)] }, void 0),
                    _jsx(Scripts, {}, void 0)] }, void 0)] }), void 0));
}
