---
firstName: David
lastName: Johnson
artistWeb: artistWebsite.ext
artistInsta: artistInstaHandle
artistBio: Placeholder bio
image: /assets/img/people/cbeattie.jpg
workTitle: I as Object Un-Seen
year: 2022
workType: Installation of 3D prints and scaffolding
workSize: 250cm x 200cm x 100cm
order: 1
teams:
  - artists
---

<div class="row">
  <div class="col-auto">
    <span class="square">{{ order }}</span>
  </div>
  <div class="col-end">
    <a href="#" class="button small">Floorplan</a>
  </div>
</div>
<h2>{{ workTitle }}</h2>
<div class="row-full">
  <div class="col-start">
    <p>{{ year }}</p>
    <p>{{ workType }}</p>
    <p>({{ workSize }})</p>
  </div>
  <div class="col-auto">
    <p>This installation is a triptych of scaled down 3D printed figures of the artist moving through a delineated space. Using the accuracy of digital technology, this piece grants access for the first time for the blind artist to his own body. The figures are framed with layers of scaffolding that are a parody of gallery casements. Through granting every visitor, sight disabled or otherwise, access to the touchable figures, it offers something close to equality of experience.</p>
  </div>
</div>

<!-- Audio block -->
<figure>
  <audio controls src="/media/file.mp3">
    <a href="/media/file.mp3">Download audio</a>
  </audio>
  <figcaption>Listen to lorem ipsum dolor</figcaption>
</figure>

<button class="small">Download transcript</button>

<h2>Artist Bio</h2>
<div class="row-full">
  <div class="col-start">
    <p><a href="//{{ artistWeb }}">{{ artistWeb }}</a></p>
    <p><a href="//instagram.com/{{ artistInsta }}">@{{ artistInsta }}</a></p>
  </div>
  <div class="col-auto">
    <p>This installation is a triptych of scaled down 3D printed figures of the artist moving through a delineated space. Using the accuracy of digital technology, this piece grants access for the first time for the blind artist to his own body. The figures are framed with layers of scaffolding that are a parody of gallery casements. Through granting every visitor, sight disabled or otherwise, access to the touchable figures, it offers something close to equality of experience.</p>
  </div>
</div>
