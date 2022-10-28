{% comment %}
Renders a list of members for a given team key
team: the key of a team (e.g. sdt), see metadata.json
{% endcomment %}
{% assign team_members = collections.people | lookup:'.data.teams',team | sortby:'order' %}

<ol>
  {%- for person in team_members -%}
    <li class="person">
      {%- if person | hasContent -%}<a href="{{ person.url | url }}">{%- endif -%}
        {{ person.data.firstName }} {{ person.data.lastName }}
      {%- if person | hasContent -%}</a>{%- endif -%}
    </li>
  {%- endfor -%}
</ol>
