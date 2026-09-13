# MacSite — Mac Miller Discography Website

MacSite is a responsive web tribute dedicated to Mac Miller's complete discography, spanning from his breakout 2010 mixtape *K.I.D.S.* to the posthumous release *Balloonerism*.

---

## Features

* **Responsive Flexbox Grid**: Seamlessly shifts between single-column mobile views and side-by-side desktop layouts.
* **Album-Specific Theme Gradients**: Custom CSS variables providing unique color-accented borders for each project card.
* **Interactive Tracklist Toggles**: Collapsible tracklists styled to attach flush with trigger buttons using jQuery.
* **CSS Masking & Visual Direction**: Smooth visual gradient overlays and fine-tuned `object-fit`/`object-position` cropping for album imagery.
* **Rich Trivia & Album Facts**: Detailed production notes, release dates, and lesser-known historical context for each release.

---

## Tech Stack

* **HTML5**: Semantic document structure.
* **CSS3**: Custom properties (variables), Flexbox, Media Queries, and CSS mask-images.
* **JavaScript / jQuery**: DOM manipulation for dynamic tracklist toggling.
* **GitHub Pages**: Hosted live deployment environment.

---

## Repository Structure

```text
MACWEBSITE/
├── cs/
│   └── style.css
├── img/
│   ├── FratImgs/
│   │   ├── frat1.jpg
│   │   ├── frat2.jpg
│   │   ├── frat3.jpg
│   │   ├── frat4.jpg
│   │   ├── frat5.jpg
│   │   ├── frat6.jpg
│   │   ├── frat7.jpg
│   │   ├── frat8.jpg
│   │   └── Frat9.jpg
│   ├── GoodMorningImgs/
│   │   ├── GM1.jpg
│   │   ├── GM2.jpg
│   │   ├── GM3.webp
│   │   ├── GM4.jpg
│   │   ├── GM5.jpg
│   │   ├── GM6.jpg
│   │   ├── GM7.jpg
│   │   ├── GM8.jpg
│   │   ├── GM9.jpg
│   │   ├── GM10.jpg
│   │   ├── GM11.jpg
│   │   ├── GM12.jpg
│   │   └── MacadelicBG.jpg
│   ├── mostRecentImgs/
│   │   ├── MR1.jpg
│   │   ├── MR2.jpg
│   │   ├── MR3.jpg
│   │   ├── MR4.jpg
│   │   ├── MR5.jpg
│   │   ├── MR6.jpg
│   │   ├── MR7.jpg
│   │   ├── MR8.jpg
│   │   ├── MR9.jpg
│   │   ├── MR10.webp
│   │   ├── MR11.jpg
│   │   ├── MR12.jpg
│   │   └── MR13.jpg
│   ├── coverArtBalloonerism.jpg
│   ├── coverArtBestDayEver.jpg
│   ├── coverArtBSL.jpg
│   ├── coverArtCircles.jpg
│   ├── coverArtDivineFeminine.jpg
│   ├── coverArtFaces.jpg
│   ├── coverArtGoodAM.jpg
│   ├── coverArtKIDS.jpg
│   ├── coverArtMacadelic.jpg
│   ├── coverArtSwimming.jpg
│   ├── coverArtWMWTSO.webp
│   ├── HandburgerIcon.webp
│   └── IndexCover.webp
├── js/
│   └── script.js
├── Balloonerism.html
├── BestDayEver.html
├── BlueSlidePark.html
├── Circles.html
├── Faces.html
├── GOODAM.html
├── index.html
├── KIDS.html
├── Macadelic.html
├── README.md
├── Swimming.html
├── TheDevineFeminine.html
└── WMWTSO.html