---
title: How does Node nextTick work?
date: '03-02-2019'
updated: 13-03-2019
published: true
tags: node javascript
---

## An explanation of nextTick

The Node.js `process.nextTick` function interacts with the event loop in a
special way.

Every time the event loop takes a full trip, we call it a tick.
When we pass a function to process.nextTick(), we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts:

```js
process.nextTick(() => {
  //do something
})
```

The event loop is busy processing the current function code.
When this operation ends, the JS engine runs all the functions passed to
nextTick calls during that operation.

It's the way we can tell the JS engine to process a function asynchronously (after the current function), but as soon as possible, not queue it.

Calling `setTimeout(() => {}, 0)` will execute the function in the next tick, much later than `nextTick()`.

When you have code that you want to execute asynchronously, but you still want it to execute before the next tick then use `nextTick()`.
Use `nextTick()` when you want to make sure that in the next event loop iteration that code is already executed.
