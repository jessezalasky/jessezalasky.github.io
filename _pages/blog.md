---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 3
pagination:
  enabled: false
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
  filter:
    - external_source
---

<div class="post">

  {% assign blog_name_size = site.blog_name | size %}
  {% assign blog_description_size = site.blog_description | size %}

  {% if blog_name_size > 0 or blog_description_size > 0 %}
    <div class="header-bar">
      <h1>{{ site.blog_name }}</h1>
      <h2>{{ site.blog_description }}</h2>
    </div>
  {% endif %}

  {% assign featured_posts = site.posts | where: "featured", "true" | where_exp: "post", "post.external_source == blank" %}
  {% if featured_posts.size > 0 %}
    <br>
    <div class="container featured-posts">
      {% assign is_even = featured_posts.size | modulo: 2 %}
      <div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
        {% for post in featured_posts %}
          <div class="col mb-4">
            <a href="{{ post.url | relative_url }}">
              <div class="card hoverable">
                <div class="row g-0">
                  <div class="col-md-12">
                    <div class="card-body">
                      <div class="float-right">
                        <i class="fa-solid fa-thumbtack fa-xs"></i>
                      </div>
                      <h3 class="card-title text-lowercase">{{ post.title }}</h3>
                      <p class="card-text">{{ post.description }}</p>
                      {% assign year = post.date | date: "%Y" %}
                        <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl }}">
                          <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        {% endfor %}
      </div>
    </div>
    <hr>
  {% endif %}

{% assign featured_posts = site.posts | where: "featured", true %}
{% assign all_posts = site.posts | where_exp: "post", "post.external_source == nil or post.external_source == ''" %}
{% assign filtered_posts = "" | split: "" %}
{% for post in all_posts %}
  {% unless featured_posts contains post %}
    {% assign filtered_posts = filtered_posts | push: post %}
  {% endunless %}
{% endfor %}
{% assign total_posts = filtered_posts.size %}
{% assign posts_per_page = site.pagination.per_page | default: 5 %}
{% assign total_pages = total_posts | divided_by: posts_per_page | ceil %}
{% assign current_page = paginator.page | default: 1 %}
{% assign offset = current_page | minus: 1 | times: posts_per_page %}

<ul class="post-list">
  {% for post in filtered_posts limit: posts_per_page offset: offset %}
  {% assign postlist = paginator.posts | where_exp: "post", "post.featured != true" | where_exp: "post", "post.external_source == blank" %}
    <li>
      <div class="row">
        <div class="{% if post.thumbnail %}col-sm-9{% else %}col-12{% endif %}">
          <h3>
            {% if post.redirect == blank %}
              <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% elsif post.redirect contains '://' %}
              <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
              <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            {% else %}
              <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
            {% endif %}
          </h3>
          <p>{{ post.description }}</p>
          <p class="post-meta">
            {% assign year = post.date | date: "%Y" %}
            {{ post.date | date: '%B %d, %Y' }}
          </p>
        </div>
        {% if post.thumbnail %}
          <div class="col-sm-3">
            <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
          </div>
        {% endif %}
      </div>
    </li>
  {% endfor %}
</ul>

{% if total_pages > 1 %}
  <div class="pagination">
    {% if current_page > 1 %}
      <a href="{{ site.baseurl }}/blog/{% if current_page > 2 %}page/{{ current_page | minus: 1 }}/{% endif %}" class="prev">Previous</a>
    {% endif %}

    {% for page in (1..total_pages) %}
      {% if page == current_page %}
        <span class="current-page">{{ page }}</span>
      {% else %}
        <a href="{{ site.baseurl }}/blog/{% if page > 1 %}page/{{ page }}/{% endif %}">{{ page }}</a>
      {% endif %}
    {% endfor %}

    {% if current_page < total_pages %}
      <a href="{{ site.baseurl }}/blog/page/{{ current_page | plus: 1 }}/" class="next">Next</a>
    {% endif %}
  </div>
{% endif %}
  {% if paginator.total_pages > 1 %}
    {% include pagination.liquid %}
  {% endif %}

</div>