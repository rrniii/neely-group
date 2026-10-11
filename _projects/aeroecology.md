---
layout: page
title: Radar aeroecology
short_title: Radar aeroecology
description: Using weather radar to study insects and migrating birds, connecting atmospheric physics with biodiversity monitoring and collision-risk assessment at offshore wind farms.
permalink: /projects/aeroecology/
importance: 3
featured: true
project_brief: aeroecology
highlight_label: Biodiversity
---

Weather radars detect insects, birds and other airborne targets as well as precipitation. Those echoes offer a way to investigate animal movement and biodiversity over large areas.

Our work brings atmospheric scientists together with ecologists to understand what biological radar echoes represent and how to turn them into useful ecological measurements. It connects radar observations with biological scattering models, field data and reproducible analysis.

## Questions we investigate

- How can biological echoes be distinguished from precipitation?
- What can radar measurements reveal about the animals producing those echoes?
- How does movement through the atmosphere relate to weather and the environment?

## What the observations reveal

Our 2025 study used weather-radar observations from **2014–2021 across more than 35,000 km² of the UK** to estimate aerial arthropod abundance. It found different trends by region and time of day: nocturnal abundance declined overall, while daytime abundance did not show the same overall decline. The analysis sampled animals flying 500–700 metres above the ground, showing how radar can extend biodiversity observations into a part of the atmosphere that is difficult to monitor directly. These distinctions matter when interpreting large-scale trends and their environmental associations. [Read Mungee et al. (2025)](https://doi.org/10.1111/gcb.70425).

The study's [data and analysis code are openly available on Zenodo](https://doi.org/10.5281/zenodo.16418783), providing a starting point for researchers building on these methods.

## Connecting echoes with ecology

A useful biodiversity measurement needs a connection to animals observed independently. **Lukach et al. (2024)** developed a way to extract a five-kilometre-wide column of radar observations above a field site. Comparisons with moth traps showed strong agreement between the radar-derived proxy and ground-level nocturnal moth abundance and diversity. This makes complex, three-dimensional radar data easier to compare with established ecological monitoring. [Read the study](https://doi.org/10.1016/j.ecoinf.2024.102901) · [Reuse the data and code](https://doi.org/10.6084/m9.figshare.27682368).

We also investigate the physics of the echoes. **Addison et al. (2022)** modelled the radar cross section of a noctuid moth, helping connect an insect's physical structure with the signal a radar measures. This complements statistical analysis of observed biological echoes. [Read the modelling study](https://doi.org/10.3390/rs14061494).

<aside class="research-note">
  <p class="eyebrow">What can radar identify?</p>
  <p>Our 2025 systematic review found that identifying biological echoes at species, genus or family level remains a research challenge. Combining radar physics, ecological observations and machine learning offers a route forward; current abundance measurements should not be read as species inventories. <a href="https://doi.org/10.1002/ecs2.70419">Read Matthews et al. (2025)</a>.</p>
</aside>

## Instruments that follow insects into the air

Alongside weather-radar networks, we work with vertically looking entomological radar to observe insects overhead. In 2024, NCAS and Rothamsted Research deployed a system at Harpenden using an NCAS-designed solar-and-battery power supply and remote communications. The off-grid design lets researchers place instruments where mains power and fixed internet are unavailable, extending the places in which aerial biodiversity can be studied. [Read the deployment story](https://ncas.ac.uk/scientists-get-set-to-spot-insects-with-new-sun-powered-radar/).

## From biodiversity monitoring to offshore migration

**BioDAR** brings together atmospheric physics, ecology and machine learning to investigate whether existing weather radar networks can measure insect communities. Ryan is a co-founder of the collaboration, contributing radar expertise alongside Christopher Hassall and Elizabeth Duncan. The work connects electromagnetic scattering models with the challenge of distinguishing organisms by their size and shape. [Explore BioDAR](https://biodarproject.org/the-biodar-team) and the [Leeds project overview](https://environment.leeds.ac.uk/news/article/463/using-weather-radar-to-monitor-insects).

**DRUID — Drivers and Repercussions of UK Insect Declines** combines conventional biodiversity records and monitoring with estimates of insect abundance, biomass and diversity derived from radar. Ryan's contribution connects this wider ecological programme with atmospheric radar observations. [Read about DRUID](https://druidproject.org.uk/) and [Ryan's involvement](https://druidproject.org.uk/people/ryan_neely_uol/).

**AVOCET (2025–2028)** applies weather radar observations to terrestrial birds migrating across coastal and offshore regions. Led by France Energies Marines with the University of Leeds among its partners, the project studies bird density, flight height and movement to improve collision-risk estimates for offshore wind farms. A central question is how uncertainty changes when observations over land are extended into marine areas. [Explore AVOCET](https://www.france-energies-marines.org/en/rd-project/avocet/).

## Live UK Bird Maps

Our **UK BirdCast / Live UK Bird Maps** software connects UK radar observations of bird passage with historical weather data. Its public source repository documents retrospective observations and a weather-linked reanalysis, with separate information on data coverage and missing observations.

The UK products describe **historical passage indices**, not bird population totals. Forecasting is currently unavailable. The documentation explains how the observations and modelled products should be interpreted and provides the source code for researchers who want to examine the methods. [Explore the software and its current status](https://github.com/rrniii/uk-birdcast).

## Connecting sensing disciplines

Ryan also co-leads the **Global Biosphere Sensing Network** with David Williams and Simon Goodman. This Leeds network connects technologies for observing living systems with questions about biodiversity, pathogens, agriculture and responsible access to environmental data. [Learn about the network](https://www.leeds.ac.uk/horizons-institute/doc/challenge-theme-networks).

[Read our aeroecology publications]({{ '/publications/' | relative_url }}) · [Discuss a collaboration]({{ '/visit/' | relative_url }})
