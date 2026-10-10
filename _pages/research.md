---
layout: page
title: research
permalink: /research/
description: Connecting instrument development, atmospheric processes and model evaluation.
nav: true
nav_order: 3
---

We investigate how particles, clouds and atmospheric motion shape weather and the exchange of energy and water with the Earth's surface. Polar clouds are a central focus: their liquid water, ice and snowfall influence the conditions experienced by ice sheets. The same expertise in radar physics and data analysis helps us measure precipitation and study animals moving through the atmosphere.

Our aim is to turn measurements into physical explanations that can be tested. That means understanding what an instrument detects, how its observations relate to other measurements, and whether a model represents the processes behind them.

## How we work

<ol class="observation-cycle">
  <li><span class="theme-number">01 / MEASURE</span><h3>Design the observation</h3><p>Develop and calibrate instruments around the scientific question. Enhanced polarimetric lidar helps distinguish liquid clouds from ice crystals whose orientation can complicate the signal.</p><a href="https://doi.org/10.5194/amt-11-835-2018">Cloud-phase measurements →</a></li>
  <li><span class="theme-number">02 / INTERPRET</span><h3>Make evidence comparable</h3><p>Account for differences in sampling, resolution and uncertainty. Our co-location methods help compare satellite observations with measurements made from the surface.</p><a href="https://doi.org/10.5194/amt-19-3511-2026">Matching observations →</a></li>
  <li><span class="theme-number">03 / TEST</span><h3>Evaluate the explanation</h3><p>Combine observations and simulations to test mechanisms. Work on Arctic cloud dissipation examines when a shortage of aerosol particles offers a plausible explanation, and when other processes are needed.</p><a href="https://doi.org/10.5194/acp-22-8973-2022">Testing cloud processes →</a></li>
</ol>

## Research programmes

<div class="research-links research-overview">
{% assign sorted_projects = site.projects | sort: 'importance' %}
{% for project in sorted_projects %}
  <a href="{{ project.url | relative_url }}">
    <span class="theme-number">Research / 0{{ forloop.index }}</span>
    <h3 class="project-title">{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <span class="project-link">Explore this research <span aria-hidden="true">↗</span></span>
  </a>
{% endfor %}
</div>

## Working across disciplines

Scientists, instrument engineers and data researchers work together across these programmes. Shared observing facilities, reusable datasets and training help others build on the measurements and methods.

Explore our [published data]({{ '/data/' | relative_url }}), [teaching and field training]({{ '/teaching/' | relative_url }}) and [research community]({{ '/people/' | relative_url }}), or [get in touch]({{ '/visit/' | relative_url }}) to discuss a scientific question.
