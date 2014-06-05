# My frontend template and static site generator.

*Concatenate JavaScript (usually just jQuery and bootstrap) files and minify them into build/js/script.min.js
*Process style.less file in to style.css
*Concatenate CSS files (Mostly Bootstrap and style.css) and minify them into build/css/style.min.css
*Take all images and optimise them (lossless compression) into build/img/*.jpg or png
*Use assemble to generate html pages and blog posts

*Use grunt to push to AWS S3 bucket.
- include cachecontrol

## Requires

node  
npm

## Usage

run npm install for dependencies

