---
path: "/blog/guided-es"
date: "2020-06-10"
title: "Guided Evolutionary Strategies"
tags: ["research", "optimization"]
draft: True
---

This post is about a research paper published at ICML last year called [Guided Evolutionary Strategies](http://proceedings.mlr.press/v97/maheswaranathan19a.html). It's a paper that I'm particularly fond of, and wanted to explain why I love it in more detail.

## Motivation

In optimization, our main goal is to minimize a function, $f(x)$. To do this, we often use what are known as _first order_ optimization algorithms. The term "first order" comes from the fact that we use the gradient of the function, $\nabla f(x)$, as part of the optimization algorithm (the gradient is part of the first order [Taylor expansion](https://en.wikipedia.org/wiki/Taylor_series) of a function, hence the name). A common first order optimization would be something like [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent).

In contrast to first order algorithms, _zeroth order_ algorithms do **not** make use of the gradient. These algorithms are used in scenarios where we do not have access to the gradient. Roughly speaking, first order optimization algorithms are faster than zeroth order ones. They have access to, and therefore can use, more information about the underlying function. However, we do not always have access to the gradient&mdash;sometimes it is hard to compute, does not exist, or is uninformative. Algorithms such as [evolution strategies (ES)](https://www.inference.vc/evolutionary-strategies-embarrassingly-parallelizable-optimization/) are zeroth order algorithms.

However, what if you have access to _partial_ gradient information? That is, what if you have access to a gradient, but it is somehow biased or corrupted? This occurs in various applications in machine learning, some of which are mentioned in our paper, but for now let's assume that this is a problem of interest. If you directly use biased gradients in a first order algorithm, you will get a biased result. On the other hand, you could ignore the biased gradient, and instead use a zeroth order algorithm. This will be unbiased, but slow because you do not get to use the faster first order algorithm.

You might imagine that we would want some kind of hybrid algorithm, one that is unbiased but still fast. That's exactly what Guided ES is.

## The basic idea

To understand the basic idea behind Guided ES, we first need to talk about the standard Evolution Strategies (ES) algorithm. The best way to understand it is via a picture:
