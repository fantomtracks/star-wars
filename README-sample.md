# Project Name
This readme doesn't mean you can't communicate with your co-workers ! \
If you have any doubts, just ask for help !

## Who is in charge ?
- Who launch the project ?
- Who is the master ?
- Start Date

## Branch system
Try to use git flow.
- What's is the default branch (dev?)?
- What's is the stagging branch?
- What's is the prod branch?

## How to install
### Requirements
- node.js

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

### Compile
Run :
```shell
npm run build
```

### Files watching
When the project is watching the HTML/PHP/CSS/JS/IMG files will now automatically refresh in your browser.

* run :
`npm start:dev`
