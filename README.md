<h1 align="center">Portfolio</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://jdegand.github.io/devchallenges-portfolio">
      Live Link
    </a>
    <span> | </span>
    <a href="https://web.archive.org/web/20240417025422/https://legacy.devchallenges.io/challenges/5ZnOYsSXM24JWnCsNFlt">
      Challenge
    </a>
  </h3>
</div>

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [Requirements](#requirements)
- [Thoughts](#thoughts)
- [Useful Resources](#useful-resources)

## Overview

![Outdated Challenge Numbers](devchallenges-portfolio.png "outdated challenge numbers")

***

![Mobile](devchallenges-portfolio-mobile.png)

***

### Built With

- HTML
- CSS

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://web.archive.org/web/20240417025422/https://legacy.devchallenges.io/challenges/5ZnOYsSXM24JWnCsNFlt) was to build an application to complete the given user stories. **Note**: The previous design document may be incomplete, as you need to find an archived version of the challenge as all `legacy` challenges have had their documentation removed from DevChallenges.

## Requirements

- [x] I can see personal details
- [x] I can see skills
- [x] I can see projects
- [x] I can filter projects by tag
- [x] I can see hobbies or certificates

Optional

- [ ] I can see experiences
- [ ] I can see blogs
- [ ] I can see projects on different pages

## Thoughts

- I used Example 2 as my design template.
- I have resisted creating a portfolio. Portfolios and personal websites can become a timesink that you are **never** satisfied with.
- I tried using a progress tag and a label for the skill bar. The WAVE accessibility tool complains about an orphaned label, even when the label's "for" attribute is linked to an ID of the progress bar. Apparently, if a label is not used inside a form, this warning will be thrown.
- It is debatable if skill bars are good for your resume or portfolio.  Since the design used them, I replicated it.
- I periodically update my numbers, but I haven't changed the projects.
- I used the Github API in another [porfolio project](https://github.com/jdegand/odin-project-personal-portfolio).
- The project included a script to track my daily walking streak. However, after my streak ended, I decided to remove it.  

## Useful Resources

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Dev.to](https://dev.to/10xlearner/how-to-get-the-profile-picture-of-a-github-account-1d82) - get profile pic of github account
- [Bashooka](https://bashooka.com/coding/25-amazing-css-range-slider-designs/) - range slider designs
- [CSS Tricks](https://css-tricks.com/css3-progress-bars/) - progress bars
- [Codepen](https://codepen.io/vskand/pen/MWKKKYK) - vanilla js filtering example
- [Stack Overflow](https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link) - html button that acts like a link
- [Stack Overflow](https://stackoverflow.com/questions/42290719/custom-styling-progress-bar-in-css) - styling progress element
- [Geeks for Geeks](https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/) - calculate number of days between dates in JS
