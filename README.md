# cpnt262-a5

## Authors: Jess Luu, Boxiang Xu Xia Lin Ellie Forte (JEBX)

## Recipe Generator

Located in recipegen.ejs for inclusion and code for animation located in js/animation.js.

- Tried various animation aspects including an x axis rotation, and a defered loading. However- it would not rotate 180 degress and instead would go between L/R and end up upside down.
- Couldn't get Greensock to work with the SVGs but the code remains.
- Instead of `/gallery`, we altered it to `/recipegenerator` with 12 possibles images to cycle through when generated.
- To reach `/:id` of each image, their figcaptions are linked.
  - There is an issue of stacking onto the url while on `single-page.ejs`; ie clicking on Members from this page will redirect to `...heroku.com/recipegenerator/memebers`

## Team

**Shoutouts** 
Jess- For rallying the team and keeping everybody on track and helping absolutely everyone with questions <br>
Xia- For being the first to have his code finished and being on top of things <br>
Boxiang- For finishing up the final details and all the outside missing elements <br>
Ellie- For a disgusting buttermilk petri dish drawing

**Notes**

- We did not setup a link to the admin page, because of privacy problem. However, it can be accessed by "/admin"
- Re: commits - it's not a great way to gauge contributions as everyone was merging others' pull requests, leading to some of the team's commits to appear as another's commit via merge.

**Group roles**:

- Note: our original [Charter](https://docs.google.com/document/d/1eXkGqCc-dCyb86nx-gCbgASVPynHRLPRhOScfYzGQKA/edit) is here although it is lacking in our roles and responsibilities.
- Boxiang:
  - Back and front end for subscribers/subscription and admin.
  - General debugging.
  - Error handling and pages.
  - Some backend for recipe generator and routes to `/:id`
  - Sitewide CSS and theme.
- Ellie:
  - Animations and graphics for the recipe generator.
  - Set up and organization of the repo, Heroku, and group's documents.
  - CSS and JS for animations.
- Jess:
  - JS and CSS for recipe generator.
  - Backend for recipe generator (w/ help from Boxiang and Xia)
  - Graphics for recipe generator.
- Xia:
  - Back and front end for team members.
  - General debugging for site and for recipe generator.
  - General CSS.

## Attributions

Icon Attribute (Serving Cover)
https://icon-icons.com/icon/plate-with-rounded-cover/74340#48

Remaining food SVGs are from:

- [Wikimedia](https://commons.wikimedia.org/wiki/Commons:Licensing)
- [Loading.io](https://loading.io/license/#by-license)
- [freesvg](https://freesvg.org/) (the licensing is linked on their homepage)
- [svgrepo](https://www.svgrepo.com/page/licensing)

Welcome Image Attribute:
https://www.pexels.com/photo/person-standing-near-brown-welcome-on-board-printed-floor-map-128299/

CSS Template Attribute:
https://templated.co/visualize