import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const meta = () => ({
    title: "Remix Starter",
    description: "Welcome to remix!",
});
export default function Index() {
    return (_jsxs("div", Object.assign({ className: "text-lg text-center" }, { children: [_jsx("h2", { children: "Welcome to Remix!" }, void 0),
            _jsx("p", Object.assign({ className: "text-success" }, { children: "SUCCESS!" }), void 0),
            _jsx("p", Object.assign({ className: "text-alert" }, { children: "ALERT!" }), void 0),
            _jsx("p", Object.assign({ className: "text-error" }, { children: "ERROR!" }), void 0),
            _jsx("p", Object.assign({ className: "text-hot-pink" }, { children: "HOT PINK!" }), void 0),
            _jsx("p", Object.assign({ className: "text-casandora-yellow" }, { children: "CASANDRA YELLOW!" }), void 0),
            _jsx("p", Object.assign({ className: "text-madonna-purple" }, { children: "MADONNA PURPLE!" }), void 0),
            _jsxs("p", { children: [_jsx("a", Object.assign({ href: "https://remix.run/dashboard/docs" }, { children: "Check out the docs" }), void 0), " to get started."] }, void 0)] }), void 0));
}
