---
layout: page
title: Portfolio
permalink: /portfolio/
description: Check out some of the things I've written and cool projects I've worked on to get a feel for my super sweet skills.
nav: true
nav_order: 2
display_categories: [Raley's Work Samples, Nowspeed Work Samples]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
        <h2 class="category">{{ category }}</h2>
      {% assign categorized_projects = site.portfolio | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <div class="row row-cols-1 row-cols-md-3">
        <!-- Internal Projects -->
        {% for project in sorted_projects %}
          {% include projects.liquid project=project %}
        {% endfor %}
        <!-- External Projects -->
        {% for source in site.external_sources %}
          {% if source.name == category %}
            {% if source.posts %}
              {% for post in source.posts %}
                {% assign project = post %}
                {% include projects.liquid project=project %}
              {% endfor %}
            {% endif %}
          {% endif %}
        {% endfor %}
      </div>
    {% endfor %}
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% assign sorted_projects = site.projects | sort: "importance" %}
      <!-- Internal Projects -->
      {% for project in sorted_projects %}
        {% include projects.liquid project=project %}
      {% endfor %}
      <!-- External Projects -->
      {% for source in site.external_sources %}
        {% if source.posts %}
          {% for post in source.posts %}
            {% assign project = post %}
            {% include projects.liquid project=project %}
          {% endfor %}
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}
</div>
