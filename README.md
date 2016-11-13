# Rails Issues Viewer

Demo project by David McIntyre.  I was a little bit confused by the specs, as the spec says that the Default Page should display issues in increments of 25 but also "should be displayed one at a time."  If the pages are supposed to be displayed one at a time, then the Default and Details Page wouldn't be much different.  As you an see, I used a table to display the issues in groups of 25.

## Installation
Run 
```javascript
npm install
```
## Running
Run 
npm run start

## Testing
To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them. Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/index.js`.
