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
    <p class="mb-0">
      <a href="{{ pi.profile_link }}">University profile</a>
      &nbsp;·&nbsp;
      <a href="mailto:{{ pi.email }}">Contact Ryan</a>
    </p>
  </div>
</div>

## Research team and collaborators

Colleagues contributing to our polar observing programmes and atmospheric radar
capability.

<div class="row mb-4">
{% for person in site.data.people.research_team %}
  <div class="col-md-6 mb-4">
    <div class="border rounded p-4 h-100">
      <div class="d-flex align-items-center mb-3">
        <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-light text-dark mr-3 flex-shrink-0" style="width: 3rem; height: 3rem;" aria-hidden="true">{{ person.initials }}</span>
        <h3 class="h5 mb-0">{{ person.name }}</h3>
      </div>
      <p class="mb-2"><strong>{{ person.role }}</strong><br><span class="text-muted">{{ person.institution }}</span></p>
      <p>{{ person.research }}</p>
      <a href="{{ person.profile_link }}" aria-label="{{ person.name | escape }}: institutional profile">Institutional profile &rarr;</a>
    </div>
  </div>
{% endfor %}
</div>

## Research students

Selected research students supervised or co-supervised by Ryan, as listed by the
University of Leeds and its doctoral training partners. Their institutional
profiles provide further details of their projects and current appointments.

<div class="row mb-4">
{% for person in site.data.people.research_students %}
  <div class="col-md-6 mb-4">
    <div class="border rounded p-4 h-100">
      <div class="d-flex align-items-center mb-3">
        <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-light text-dark mr-3 flex-shrink-0" style="width: 3rem; height: 3rem;" aria-hidden="true">{{ person.initials }}</span>
        <h3 class="h5 mb-0">{{ person.name }}</h3>
      </div>
      <p class="mb-2"><strong>{{ person.role }}</strong><br><span class="text-muted">{{ person.institution }}</span></p>
      <p>{{ person.research }}</p>
      <a href="{{ person.profile_link }}" aria-label="{{ person.name | escape }}: research profile">Research profile &rarr;</a>
    </div>
  </div>
{% endfor %}
</div>

## Work with us

We welcome conversations about research collaborations and postgraduate study.
[Contact Ryan](mailto:R.Neely@leeds.ac.uk) to discuss your interests, and browse
[University of Leeds research opportunities](https://phd.leeds.ac.uk/) for
advertised projects and scholarships.
