---
title: 'Welcome to the blog'
date: '2026-10-28'
description: 'A short example of the formatting supported on this blog.'
tags:
  - notes
---
This is an example post. Posts are written in **Markdown**, kept alongside the
website, and turned into HTML when the site is built.

## Research and software

A place for notes on machine learning, neuroscience, and building useful things.
You can browse my [research](/research/) or [open source projects](/code/).

### A small example

Use inline code like `learning_rate`, or a fenced block with a language name for
syntax highlighting:

```python
def gradient_step(parameters, gradient, learning_rate=0.01):
    return parameters - learning_rate * gradient
```

- Headings give a post structure.
- Links connect ideas.
- Images can live in `public/blog/` and use descriptive alternative text.

![A simple diagram connecting an idea to an experiment and a result](/blog/research-cycle.svg)

> Start with a question, run an experiment, and write down what you learn.

1. Add a Markdown file in `content/blog/`.
2. Preview and build the site locally.
3. Commit and push to publish.
