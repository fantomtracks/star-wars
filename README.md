# front base
Star Wars project.

## How to install
### Requirements
- node.js (node v14.15.0)
- php

### Install the system
On first install run this command:
```shell
npm install
```
_More details see: [package.json](/package.json)_

### Where put my files ?
Don't add files to `/dist` folder because files are compiled here. \
Only code in `/src` folder.

### CSS & JS libraries
- Add/Install CSS & JS libraries with `npm`

### Compile in `dist` folder
Run :
```shell
npm run build
```

### Files watching
* run :
`npm start:dev`

When the project is watching the HTML/PHP/CSS/JS/IMG files will now automatically refresh in your browser, at this URL `http://localhost:3000`