import { describe, it } from 'node:test';
import assert from 'assert';
import { parse } from './svg-path-grammar.js';

const expect = (path, expected) => assert.deepStrictEqual(parse(path), expected);

describe('Basics of drawing commands', () => {
  it('Close', () => {
    const expected = [{ cmd: 'Z' }];

    expect('z', expected);
    expect('Z', expected);
    expect(' Z ', expected);
    expect('  z', expected);
    expect('z  ', expected);
  });

  it('Move to', () => {
    expect('M 0 0', [{
      cmd: 'M',
      data: [{ x: 0, y: 0 }],
    }]);
    expect('m 0 0', [{
      cmd: 'm',
      data: [{ x: 0, y: 0 }],
    }]);
    expect('M 12 34 56 78 100 200', [{
      cmd: 'M',
      data: [{ x: 12, y: 34 }, { x: 56, y: 78 }, { x: 100, y: 200 }],
    }]);
    expect('m 12 34 56 78 100 200', [{
      cmd: 'm',
      data: [{ x: 12, y: 34 }, { x: 56, y: 78 }, { x: 100, y: 200 }],
    }]);
  });

  it('Line to', () => {
    expect('L 0 0', [{
      cmd: 'L',
      data: [{ x: 0, y: 0 }],
    }]);
    expect('l 0 0', [{
      cmd: 'l',
      data: [{ x: 0, y: 0 }],
    }]);
    expect('L 12 34 56 78 100 200', [{
      cmd: 'L',
      data: [{ x: 12, y: 34 }, { x: 56, y: 78 }, { x: 100, y: 200 }],
    }]);
    expect('l 12 34 56 78 100 200', [{
      cmd: 'l',
      data: [{ x: 12, y: 34 }, { x: 56, y: 78 }, { x: 100, y: 200 }],
    }]);
  });

  it('Horizontal to', () => {
    expect('H 0', [{ cmd: 'H', data: [0] }]);
    expect('h 0', [{ cmd: 'h', data: [0] }]);
    expect('H 12 34 56 78 100 200', [{
      cmd: 'H',
      data: [12, 34, 56, 78, 100, 200],
    }]);
    expect('h 12 34 56 78 100 200', [{
      cmd: 'h',
      data: [12, 34, 56, 78, 100, 200],
    }]);
  });

  it('Vertical to', () => {
    expect('V 0', [{ cmd: 'V', data: [0] }]);
    expect('v 0', [{ cmd: 'v', data: [0] }]);
    expect('V 12 34 56 78 100 200', [{
      cmd: 'V',
      data: [12, 34, 56, 78, 100, 200],
    }]);
    expect('v 12 34 56 78 100 200', [{
      cmd: 'v',
      data: [12, 34, 56, 78, 100, 200],
    }]);
  });

  it('Quadratic to', () => {
    expect('Q 0 0 0 0', [{ cmd: 'Q', data: [{ first: { x: 0, y: 0 }, second: { x: 0, y: 0 } }] }]);
    expect('q 0 0 0 0', [{ cmd: 'q', data: [{ first: { x: 0, y: 0 }, second: { x: 0, y: 0 } }] }]);
    expect('Q 1 2 3 4 5 6 7 8 100 200 300 400', [{
      cmd: 'Q',
      data: [
        { first: { x: 1, y: 2 }, second: { x: 3, y: 4 } },
        { first: { x: 5, y: 6 }, second: { x: 7, y: 8 } },
        { first: { x: 100, y: 200 }, second: { x: 300, y: 400 } },
      ],
    }]);
    expect('q 1 2 3 4 5 6 7 8 100 200 300 400', [{
      cmd: 'q',
      data: [
        { first: { x: 1, y: 2 }, second: { x: 3, y: 4 } },
        { first: { x: 5, y: 6 }, second: { x: 7, y: 8 } },
        { first: { x: 100, y: 200 }, second: { x: 300, y: 400 } },
      ],
    }]);
  });

  it('Smooth quadratic to', () => {
    expect('T 0 0 0 0', [{ cmd: 'T', data: [{ x: 0, y: 0 }, { x: 0, y: 0 }] }]);
    expect('t 0 0 0 0', [{ cmd: 't', data: [{ x: 0, y: 0 }, { x: 0, y: 0 }] }]);
    expect('T 1 2 3 4 5 6 7 8 100 200 300 400', [{
      cmd: 'T',
      data: [
        { x: 1, y: 2 },
        { x: 3, y: 4 },
        { x: 5, y: 6 },
        { x: 7, y: 8 },
        { x: 100, y: 200 },
        { x: 300, y: 400 },
      ],
    }]);
    expect('t 1 2 3 4 5 6 7 8 100 200 300 400', [{
      cmd: 't',
      data: [
        { x: 1, y: 2 },
        { x: 3, y: 4 },
        { x: 5, y: 6 },
        { x: 7, y: 8 },
        { x: 100, y: 200 },
        { x: 300, y: 400 },
      ],
    }]);
  });

  it('Cubic to', () => {
    expect('C 0 0 0 0 0 0', [{
      cmd: 'C',
      data: [{ first: { x: 0, y: 0 }, second: { x: 0, y: 0 }, third: { x: 0, y: 0 } }],
    }]);
    expect('c 0 0 0 0 0 0', [{
      cmd: 'c',
      data: [{ first: { x: 0, y: 0 }, second: { x: 0, y: 0 }, third: { x: 0, y: 0 } }],
    }]);
    expect('C 1 2 3 4 5 6 7 8 100 200 300 400', [{
      cmd: 'C',
      data: [
        { first: { x: 1, y: 2 }, second: { x: 3, y: 4 }, third: { x: 5, y: 6 } },
        { first: { x: 7, y: 8 }, second: { x: 100, y: 200 }, third: { x: 300, y: 400 } },
      ],
    }]);
    expect('c 1 2 3 4 5 6 7 8 100 200 300 400', [{
      cmd: 'c',
      data: [
        { first: { x: 1, y: 2 }, second: { x: 3, y: 4 }, third: { x: 5, y: 6 } },
        { first: { x: 7, y: 8 }, second: { x: 100, y: 200 }, third: { x: 300, y: 400 } },
      ],
    }]);
  });

  it('Smooth cubic to', () => {
    expect('S 0 0 0 0', [{
      cmd: 'S',
      data: [{ first: { x: 0, y: 0 }, second: { x: 0, y: 0 } }],
    }]);
    expect('s 0 0 0 0', [{
      cmd: 's',
      data: [{ first: { x: 0, y: 0 }, second: { x: 0, y: 0 } }],
    }]);
    expect('S 1 2 3 4 5 6 7 8 100 200 300 400', [{
      cmd: 'S',
      data: [
        { first: { x: 1, y: 2 }, second: { x: 3, y: 4 } },
        { first: { x: 5, y: 6 }, second: { x: 7, y: 8 } },
        { first: { x: 100, y: 200 }, second: { x: 300, y: 400 } },
      ],
    }]);
    expect('s 1 2 3 4 5 6 7 8 100 200 300 400', [{
      cmd: 's',
      data: [
        { first: { x: 1, y: 2 }, second: { x: 3, y: 4 } },
        { first: { x: 5, y: 6 }, second: { x: 7, y: 8 } },
        { first: { x: 100, y: 200 }, second: { x: 300, y: 400 } },
      ],
    }]);
  });

  it('Arc to', () => {
    expect('A 0 0 0 1 1 0 0', [{
      cmd: 'A',
      data: [{ radius: { x: 0, y: 0 }, rotation: 0, largeArc: '1', sweepFlag: '1', to: { x: 0, y: 0 } }],
    }]);
    expect('a 0 0 0 1 1 0 0', [{
      cmd: 'a',
      data: [{ radius: { x: 0, y: 0 }, rotation: 0, largeArc: '1', sweepFlag: '1', to: { x: 0, y: 0 } }],
    }]);
    expect('A 1 1 45 1 0 2 3 4 4 90 0 1 5 6', [{
      cmd: 'A',
      data: [
        { radius: { x: 1, y: 1 }, rotation: 45, largeArc: '1', sweepFlag: '0', to: { x: 2, y: 3 } },
        { radius: { x: 4, y: 4 }, rotation: 90, largeArc: '0', sweepFlag: '1', to: { x: 5, y: 6 } },
      ],
    }]);
    expect('a 1 1 45 1 0 2 3 4 4 90 0 1 5 6', [{
      cmd: 'a',
      data: [
        { radius: { x: 1, y: 1 }, rotation: 45, largeArc: '1', sweepFlag: '0', to: { x: 2, y: 3 } },
        { radius: { x: 4, y: 4 }, rotation: 90, largeArc: '0', sweepFlag: '1', to: { x: 5, y: 6 } },
      ],
    }]);
  });
});

it('Path examples', () => {
  expect('M 100 50 L 150 75 Q 175 100 200 125 L 250 150 Z', [
    { cmd: 'M', data: [{ x: 100, y: 50 } ] },
    { cmd: 'L', data: [{ x: 150, y: 75 } ] },
    { cmd: 'Q', data: [{ first: { x: 175, y: 100 }, second: { x: 200, y: 125 } }] },
    { cmd: 'L', data: [{ x: 250, y: 150 }] },
    { cmd: 'Z' },
  ]);
  expect('M 50 200 C 75 225 100 250 125 275 L 150 300 L 175 275 C 200 250 225 225 250 200 Z', [
    { cmd: 'M', data: [{ x: 50, y: 200 }] },
    { cmd: 'C', data: [{ first: { x: 75, y: 225 }, second: { x: 100, y: 250 }, third: { x: 125, y: 275 } }] },
    { cmd: 'L', data: [{ x: 150, y: 300 }] },
    { cmd: 'L', data: [{ x: 175, y: 275 }] },
    { cmd: 'C', data: [{ first: { x: 200, y: 250 }, second: { x: 225, y: 225 }, third: { x: 250, y: 200 } }] },
    { cmd: 'Z' },
  ]);
  expect('M 200 100 L 250 125 A 50 50 0 0 1 300 150 L 350 175 Z', [
    { cmd: 'M', data: [{ x: 200, y: 100 }] },
    { cmd: 'L', data: [{ x: 250, y: 125 }] },
    { cmd: 'A', data: [{ radius: { x: 50, y: 50 }, rotation: 0, largeArc: '0', sweepFlag: '1', to: { x: 300, y: 150 } }] },
    { cmd: 'L', data: [{ x: 350, y: 175 }] },
    { cmd: 'Z' },
  ]);
  expect('M 100 250 L 150 225 Q 175 200 200 175 L 250 150 C 275 125 300 100 325 75 Z', [
    { cmd: 'M', data: [{ x: 100, y: 250 }] },
    { cmd: 'L', data: [{ x: 150, y: 225 }] },
    { cmd: 'Q', data: [{ first: { x: 175, y: 200 }, second: { x: 200, y: 175 } }] },
    { cmd: 'L', data: [{ x: 250, y: 150 }] },
    { cmd: 'C', data: [{ first: { x: 275, y: 125 }, second: { x: 300, y: 100}, third: { x: 325, y: 75 } }] },
    { cmd: 'Z' },
  ]);
  expect('M 50 150 C 75 125 100 100 125 75 L 150 50 L 175 75 C 200 100 225 125 250 150 Z', [
    { cmd: 'M', data: [{ x: 50, y: 150}] },
    { cmd: 'C', data: [{ first: { x: 75, y: 125 }, second: { x: 100, y: 100}, third: { x: 125, y: 75 } }] },
    { cmd: 'L', data: [{ x: 150, y: 50 }] },
    { cmd: 'L', data: [{ x: 175, y: 75 }] },
    { cmd: 'C', data: [{ first: { x: 200, y: 100}, second: { x: 225, y: 125 }, third: { x: 250, y: 150 } }] },
    { cmd: 'Z' },
  ]);
});

describe('Edge cases', () => {
  it('Whitespace', () => {
    expect('  M0 0  ', [{ cmd: 'M', data: [{ x: 0, y: 0 }] }]);
    expect('  L0 0  ', [{ cmd: 'L', data: [{ x: 0, y: 0 }] }]);
  });
  it('Numbers', () => {
    expect('M4-3', [{ cmd: 'M', data: [{ x: 4, y: -3 }] }]);
    expect('M4+3', [{ cmd: 'M', data: [{ x: 4, y: 3 }] }]);
    expect('M4e+1-1e13', [{ cmd: 'M', data: [{ x: 4e+1, y: -1e13 }] }]);
    expect('M14.3e-12 1e-11', [{ cmd: 'M', data: [{ x: 14.3e-12, y: 1e-11 }] }]);
    expect('M4.5 63.789', [{ cmd: 'M', data: [{ x: 4.5, y: 63.789 }] }])
  });
  it('Commas', () => {
    expect('M4,3,5,6', [{ cmd: 'M', data: [{ x: 4, y: 3 }, { x: 5, y: 6 }] }]);
    expect('C1,2 3 4, 5 6', [{
      cmd: 'C',
      data: [{ first: { x: 1, y: 2 }, second: { x: 3, y: 4 }, third: { x: 5, y: 6 } }],
    }]);
  });
});
