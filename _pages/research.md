---
layout: page
title: research
permalink: /research/
description: Atmospheric observations, polar processes and radar aeroecology.
nav: true
nav_order: 3
---

We develop and use observations to understand the atmosphere, from aerosol particles to precipitation systems and biological activity in the air.

<div class="research-links research-overview">
{% assign sorted_projects = site.projects | sort: 'importance' %}
{% for project in sorted_projects %}
  <a href="{{ project.url | relative_url }}">
    <span class="theme-number">Research / 0{{ forloop.index }}</span>
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <span class="project-link">Explore this research <span aria-hidden="true">↗</span></span>
  </a>
{% endfor %}
</div>

## Working across disciplines

Our work combines atmospheric science, engineering, remote sensing and ecology. Visit our [people page]({{ '/people/' | relative_url }}) to meet researchers and collaborators, or [get in touch]({{ '/visit/' | relative_url }}) to discuss a scientific question.
