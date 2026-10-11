---
layout: home
title: home
permalink: /
subtitle: University of Leeds · National Centre for Atmospheric Science
description: Polar clouds, autonomous observatories and radar aeroecology. Discover the Neely Research Group's science, people, open data and methods at Leeds and NCAS.
---

<div class="group-hero">
  <div class="hero-copy">
    <p class="eyebrow">University of Leeds · NCAS</p>
    <h1>From polar ice<br><em>to life in the air.</em></h1>
    <p class="hero-intro">We observe how the atmosphere shapes ice sheets and how flying animals move through it.</p>
    <p>Led by Professor Ryan Neely, our Leeds and NCAS group connects instrument engineering, field observations and modelling—from autonomous polar observatories to radar studies of biodiversity.</p>
    <div class="hero-actions"><a class="group-button" href="{{ '/research/' | relative_url }}">Explore our research <span aria-hidden="true">↗</span></a><a href="{{ '/people/' | relative_url }}">Meet the people →</a><a href="{{ '/join/' | relative_url }}">Join us →</a></div>
  </div>
  <section class="research-highlights" aria-labelledby="highlights-heading">
    <h2 class="eyebrow" id="highlights-heading">Research highlights</h2>
    {% assign featured_projects = site.projects | where: 'featured', true | sort: 'importance' %}
    {% for project in featured_projects %}
      <a class="highlight-card" href="{{ project.url | relative_url }}">
        <span class="theme-number">0{{ forloop.index }} / {{ project.highlight_label }}</span>
        <h3>{{ project.short_title | default: project.title }}</h3>
        <p>{{ project.description }}</p>
        <span class="highlight-arrow" aria-hidden="true">↗</span>
      </a>
    {% endfor %}
  </section>
</div>

<section class="group-section recent-work" aria-labelledby="recent-heading">
  <div class="section-heading"><div><p class="eyebrow">From the field and the literature</p><h2 id="recent-heading">Recent work</h2></div></div>
  <ol class="updates-list">
    <li><time datetime="2026-08-17">17 August 2026</time><div><h3><a href="{{ '/projects/woest/#using-radar-to-test-model-physics' | relative_url }}">Testing cloud models with radar</a></h3><p>A new WOEST study uses raindrop signals to examine model microphysics in two WesCon cases.</p></div></li>
    <li><time datetime="2026-06">June 2026</time><div><h3><a href="{{ '/projects/tone-ico-snotroll/#snøtroll-from-terrain-to-snowfall' | relative_url }}">SnøTroll research award begins</a></h3><p>The NERC award connects Antarctic terrain, clouds and snowfall through 2028.</p></div></li>
    <li><time datetime="2026-04">April 2026</time><div><h3><a href="https://www.gamb2le.co.uk/latest-news/first-aurora-test-deployment">AURORA's first test deployment</a></h3><p>GAMB2LE brings its autonomous observatory into the field at the University of Leeds farm.</p></div></li>
  </ol>
</section>

<section class="group-section" aria-labelledby="findings-heading">
  <div class="section-heading"><div><p class="eyebrow">Evidence from our research</p><h2 id="findings-heading">What the measurements reveal</h2></div><a href="{{ '/publications/' | relative_url }}">Read the publications →</a></div>
  {% include research_findings.liquid %}
</section>

<section class="field-feature group-section" aria-labelledby="field-heading">
  <figure><img src="{{ '/assets/img/fieldwork/helikite.jpg' | relative_url }}" alt="A tethered Helikite carrying aerosol and meteorological instruments at Summit Station, Greenland" loading="lazy" width="1168" height="767"><figcaption><a href="https://doi.org/10.5194/acp-24-11103-2024">Guy et al. (2024), Fig. 2</a> · <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></figcaption></figure>
  <div><p class="eyebrow">Measurements with a purpose</p><h2 id="field-heading">Build. Observe.<br>Explain.</h2><p>A radar or lidar signal carries information about particles, clouds and motion. Extracting that information requires instrument design, calibration and a careful account of what each measurement can resolve.</p><p>These methods connect <a href="{{ '/projects/gamb2le/' | relative_url }}">GAMB2LE's autonomous observations</a>, <a href="{{ '/projects/tone-ico-snotroll/' | relative_url }}">cloud and snowfall research at Troll</a>, and <a href="{{ '/projects/aeroecology/' | relative_url }}">radar aeroecology</a>. Across all three, we turn signals into evidence about the environment.</p><a href="{{ '/research/#how-we-work' | relative_url }}">How we turn observations into understanding →</a></div>
</section>

<section class="group-section" aria-labelledby="resources-heading">
  <div class="section-heading"><div><p class="eyebrow">Use the observations. Learn the methods.</p><h2 id="resources-heading">Science to build on</h2></div></div>
  <div class="research-links research-overview">
    <a href="{{ '/data/' | relative_url }}"><span class="theme-number">RESEARCH DATA</span><h3>Explore the observations</h3><p>Explore GAMB2LE project data, Troll cloud observations and published aeroecology datasets, alongside our wider atmospheric archives.</p><span>Explore the data →</span></a>
    <a href="{{ '/teaching/' | relative_url }}"><span class="theme-number">TEACHING &amp; TRAINING</span><h3>Learn by making measurements</h3><p>University modules, residential field courses and NCAS training develop the practical skills behind observational science.</p><span>Explore teaching →</span></a>
  </div>
</section>

<section class="group-section" aria-labelledby="papers-heading"><div class="section-heading"><div><p class="eyebrow">From our research</p><h2 id="papers-heading">Selected publications</h2></div><a href="{{ '/publications/' | relative_url }}">Browse publications →</a></div>{% include selected_papers.liquid %}</section>

<section class="join-banner"><div><p class="eyebrow">Work with us</p><h2>Curious about the atmosphere?</h2><p>We welcome conversations about research, collaboration and postgraduate study.</p></div><a class="group-button" href="{{ '/join/' | relative_url }}">Find a way to work with us ↗</a></section>
