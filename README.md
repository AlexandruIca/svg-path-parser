# SVG Path Parser

This repository contains a PEG grammar for parsing the [`d` attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d) of `path`s in SVGs.

The parser tries to be as close as possible to the [SVG spec](https://www.w3.org/TR/SVG2/paths.html), but I don't know if it's fully standards-compliant.

The parser is also not validating the path in any way. It doesn't check for paths starting with a `move to` command, for example. It doesn't process the path in any way either, leaving everything as it is. All other processing is left up to the user.

# Usage

```js
import { parse } from './svg-path-grammar.js';

parse('M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z');
// Will result in:
[ // An array of objects with two keys: { cmd, data }
  {
    cmd: 'M', // The same command as in the SVG path
    data: [ // All coordinates associated with the command
      { x: 433.601, y: 67.001 }
    ]
  },
  { cmd: 'c', data: [{ first: { x: -24.7, y: -24.7 }, second: { x: -57.4, y: -38.2 }, third: { x: -92.3, y: -38.2 } }] },
  { cmd: 's', data: [{ first: { x: -67.7, y: 13.6 }, second: { x: -92.4, y: 38.3 } }] },
  { cmd: 'l', data: [{ x: -12.9, y: 12.9 }] },
  { cmd: 'l', data: [{ x: -13.1, y: -13.1 }] },
  { cmd: 'c', data: [{ first: { x: -24.7, y: -24.7 }, second: { x: -57.6, y: -38.4 }, third: { x: -92.5, y: -38.4 } }] },
  { cmd: 'c', data: [{ first: { x: -34.8, y: 0 }, second: { x: -67.6, y: 13.6 }, third: { x: -92.2, y: 38.2 } }] },
  { cmd: 'c', data: [{ first: { x: -24.7, y: 24.7 }, second: { x: -38.3, y: 57.5 }, third: { x: -38.2, y: 92.4 } }] },
  { cmd: 'c', data: [{ first: { x: 0, y: 34.9 }, second: { x: 13.7, y: 67.6 }, third: { x: 38.4, y: 92.3 } }] },
  { cmd: 'l', data: [{ x: 187.8, y: 187.8 }] },
  { cmd: 'c', data: [{ first: { x: 2.6, y: 2.6 }, second: { x: 6.1, y: 4 }, third: { x: 9.5, y: 4 } }] },
  { cmd: 'c', data: [{ first: { x: 3.4, y: 0 }, second: { x: 6.9, y: -1.3 }, third: { x: 9.5, y: -3.9 } }] },
  { cmd: 'l', data: [{ x: 188.2, y: -187.5 }] },
  { cmd: 'c', data: [{ first: { x: 24.7, y: -24.7 }, second: { x: 38.3, y: -57.5 }, third: { x: 38.3, y: -92.4 } }] },
  { cmd: 'C', data: [{ first: { x: 471.801, y: 124.501 }, second: { x: 458.301, y: 91.701 }, third: { x: 433.601, y: 67.001 } }] },
  { cmd: 'Z' } // This will always be uppercase Z
]
```

You can also check out the [tests](./test.js) to see more examples.

There are existing solutions already, but I wanted to create my own because:

- I wanted something that doesn't alter the input in any way.
- I wanted something that doesn't validate the path itself when parsing (things like checking for `M`/`m` at the beginning).
- It's fun.

# Building the parser

```
npx peggy svg-path-grammar.peg  
```

# Running the tests

```
node test.js
```
