{% comment %}
Renders a list of members for a given team key
team: the key of a team (e.g. sdt), see metadata.json
{% endcomment %}
{% assign team_members = collections.people | lookup:'.data.teams',team | sortby:'order' %}

<p>The exhibition will feature artworks from the artists listed below.</p>
<p>Link to the artists' pages will be added soon. Come back to check details of each individual artwork.</p>

<ol>
  {%- for person in team_members -%}
    <li class="person">
      {{ person.data.firstName }} {{ person.data.lastName }}
    </li>
  {%- endfor -%}
</ol>
