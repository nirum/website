---
title: On Writing Good Code
date: 2026-03-15
tags: []
---

Good code is code that communicates its intent clearly. It's not about cleverness or brevity — it's about the next person who reads it being able to understand what's happening and why.

## Readability over performance

Most of the time, the bottleneck isn't your code — it's your ability to reason about it six months later. Optimize for clarity first.

```javascript
// Prefer this
const activeUsers = users.filter(user => user.isActive);

// Over this
const a = u.filter(x => x.a);
```

## Names matter

A well-named variable eliminates the need for a comment. If you find yourself writing a comment to explain *what* a variable holds, rename it instead.

## Small functions

Each function should do one thing. If you're scrolling to see the whole function, it's probably doing too much.
