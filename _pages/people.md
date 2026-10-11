---
layout: page
permalink: /people/
title: people
description: Researchers, engineers and students working across atmospheric observations, polar science and radar aeroecology.
nav: true
nav_order: 2
---

Our research brings together atmospheric scientists, engineers and students at
the University of Leeds and the National Centre for Atmospheric Science, with
collaborators across disciplines and institutions.

<nav class="section-nav" aria-label="On this page">
  <a href="#group-lead">Group lead</a>
  <a href="#team">Team</a>
  <a href="#current-doctoral-supervision">Doctoral researchers</a>
  <a href="#past-doctoral-supervision">Past supervision</a>
</nav>

{% assign pi = site.data.people.principal_investigator %}

## Group lead

<div class="row mb-5 align-items-center">
  <div class="col-sm-auto mb-3 mb-sm-0">
    <img src="{{ '/assets/img/' | append: pi.img | relative_url }}" class="img-fluid rounded" style="width: 160px; height: 190px; object-fit: cover;" alt="{{ pi.name | escape }}">
  </div>
  <div class="col">
    <h3 class="mt-0">{{ pi.name }}</h3>
    <p class="mb-2"><strong>{{ pi.role }}</strong><br>{{ pi.institution }}</p>
    <p>{{ pi.research }}</p>
    <p>Ryan joined Leeds and NCAS in 2014 after doctoral research at the University of Colorado Boulder and a postdoctoral fellowship at NCAR. His work on polarisation lidar at Summit, Greenland, grew into a programme connecting cloud physics, national radar facilities and the study of airborne biodiversity.</p>
    <p class="mb-0">
      <a href="{{ pi.profile_link }}">University profile</a>
      &nbsp;·&nbsp;
      <a href="https://rrniii.github.io/cv/">Full CV</a>
      &nbsp;·&nbsp;
      <a href="mailto:{{ pi.email }}">Contact Ryan</a>
    </p>
  </div>
</div>

## Team

Our team brings together polar meteorology, radar data analysis, instrument
engineering and field operations. These skills connect our observing programmes
across NCAS and the University of Leeds. Heather Guy and Sarah Barr, both
previously doctoral researchers supervised by Ryan, now share scientific
leadership of [GAMB2LE]({{ '/projects/gamb2le/' | relative_url }}) with him.

<div class="row mb-4">
{% for person in site.data.people.research_team %}
  <div class="col-md-6 mb-4">
    <div class="border rounded p-4 h-100">
      <div class="d-flex align-items-center mb-3">
        <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-light text-dark mr-3 flex-shrink-0" style="width: 3rem; height: 3rem;" aria-hidden="true">{{ person.initials }}</span>
        <h3 class="h5 mb-0">{{ person.name }}</h3>
      </div>
      <p class="mb-2"><strong>{{ person.role }}</strong><br><span class="person-detail">{{ person.institution }}</span></p>
      <p>{{ person.research }}</p>
      {% if person.programme_path %}<p><a href="{{ person.programme_path | relative_url }}">{{ person.programme_label }} &rarr;</a></p>{% endif %}
      <a href="{{ person.profile_link }}" aria-label="{{ person.name | escape }}: institutional profile">Institutional profile &rarr;</a>
    </div>
  </div>
{% endfor %}
</div>

## Current doctoral supervision

Researchers supervised or co-supervised by Ryan, with supervision roles and
start dates from his [public CV](https://rrniii.github.io/cv/). Linked University
and doctoral training programme profiles describe their research.

<div class="row mb-4">
{% for person in site.data.people.research_students %}
  <div class="col-md-6 mb-4">
    <div class="border rounded p-4 h-100">
      <div class="d-flex align-items-center mb-3">
        <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-light text-dark mr-3 flex-shrink-0" style="width: 3rem; height: 3rem;" aria-hidden="true">{{ person.initials }}</span>
        <h3 class="h5 mb-0">{{ person.name }}</h3>
      </div>
      <p class="mb-2"><strong>{{ person.role }}</strong>{% if person.institution %}<br><span class="person-detail">{{ person.institution }}</span>{% endif %}</p>
      <p class="small person-detail">Ryan: {{ person.supervision | downcase }}</p>
      {% if person.research %}<p>{{ person.research }}</p>{% endif %}
      {% if person.programme_path %}<p><a href="{{ person.programme_path | relative_url }}">{{ person.programme_label }} &rarr;</a></p>{% endif %}
      <a href="{{ person.profile_link }}" aria-label="{{ person.name | escape }}: {{ person.profile_label | default: 'research profile' }}">{{ person.profile_label | default: 'Research profile' }} &rarr;</a>
    </div>
  </div>
{% endfor %}
</div>

## Past doctoral supervision

Earlier supervision includes polar remote sensing, radar meteorology and
atmospheric aerosols. These are supervision periods recorded in Ryan's
[public CV](https://github.com/rrniii/cv/blob/main/sections/students.md), rather
than current appointments. Heather Guy and Sarah Barr continue to collaborate
with Ryan as GAMB2LE co-leads.

<div class="table-responsive">
  <table class="table">
    <thead>
      <tr><th scope="col">Researcher</th><th scope="col">Supervision period</th><th scope="col">Ryan's role</th></tr>
    </thead>
    <tbody>
      {% for person in site.data.people.past_doctoral_supervision %}
      <tr>
        <td><strong>{{ person.name }}</strong>{% if person.research %}<br><span class="small person-detail">{{ person.research }}</span>{% endif %}</td>
        <td class="text-nowrap">{{ person.years }}</td>
        <td>{{ person.supervision }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Work with us

We welcome conversations about research collaborations and postgraduate study.
[Contact Ryan](mailto:R.Neely@leeds.ac.uk) to discuss your interests, and browse
[University of Leeds research opportunities](https://phd.leeds.ac.uk/) for
advertised projects and scholarships.
