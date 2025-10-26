# Run4Charity website

A modern, animated website built for 'Komop tegen Kanker', a non-profit organization that funds cancer research. You can visit it here: https://run4charity.be

This project was developed to promote their benefit run, in which the team at Signify participates to raise awareness and gather funds for the cause.

## Overview

The website focuses on clean visuals, smooth motion, and a custom scroll-based line animation that guides the visitor through different sections.
The goal was to build a visually engaging yet performant site that works seamlessly across both desktop and mobile devices.

## Key Features

Custom SVG running-line animation using GSAP ScrollTrigger

Fully responsive layout, optimized separately for mobile and desktop

Tailwind CSS for a consistent and lightweight design

Figma + GSAP workflow for precise animation control

Minimal setup, deployable on platforms like Netlify or Vercel

## The Running-Line Animation

This was by far the most challenging and interesting part of the project.

### How It Works

The line was created in Figma as an SVG path and exported for use on the website.

The SVG was duplicated:

The first path serves as the visible line.

The second path acts as a cover, which is progressively revealed using GSAP ScrollTrigger as the user scrolls.

To ensure smooth animation and proper scaling on all devices, two separate SVGs were created, one for desktop and one specifically optimized for mobile.

This approach allowed the animation to maintain precision and timing, even with different aspect ratios and viewport sizes.

## Tech Stack

- Technology	Purpose

- HTML / Tailwind CSS	Structure & styling

- GSAP + ScrollTrigger	Animation and scroll control

- Figma	SVG path design

- JavaScript (ES Modules)	Logic & interactivity

- Netlify	Hosting & deployment


## Lessons Learned

SVG-based animations require perfect alignment between design and code small coordinate differences can cause noticeable issues.

Responsive scroll animations often need separate assets rather than simple scaling.

GSAP’s ScrollTrigger offers precise control but must be carefully tuned to match viewport breakpoints.

## Getting Started

### Clone the repository:

git clone https://github.com/Mitch-creates/ktk-website.git

cd ktk-website


### Install dependencies:

npm install


### Run locally:

npm run dev


### Then open:

http://localhost:3000
