# Rails Issues Viewer

Demo project by David McIntyre.  I was a little bit confused by the specs, as the spec says that the Default Page should display issues in increments of 25 but also "should be displayed one at a time."  If the pages are supposed to be displayed one at a time, then the Default and Details Page wouldn't be much different.  As you an see, I used a table to display the issues in groups of 25.

## Installation
```javascript
npm install
```
Source code can also be viewed at [my github repo](https://github.com/davidpaulmcintyre/demo)

## Running
```javascript
npm run start
```
## Testing
```javascript
npm run test
```
For some reason my tests are reporting lots of warnings that the project has duplicate modules due to filename casing.  Changing filename of TextCell from 'TextCell' to 'textCell' doesn't seem to fix it.