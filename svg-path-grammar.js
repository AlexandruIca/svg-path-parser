// @generated by Peggy 4.0.2.
//
// https://peggyjs.org/


function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  var self = Error.call(this, message);
  // istanbul ignore next Check is a necessary evil to support older environments
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
  self.expected = expected;
  self.found = found;
  self.location = location;
  self.name = "SyntaxError";
  return self;
}

peg$subclass(peg$SyntaxError, Error);

function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) { return str; }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}

peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var offset_s = (this.location.source && (typeof this.location.source.offset === "function"))
      ? this.location.source.offset(s)
      : s;
    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", offset_s.line.toString().length, ' ');
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = (last - s.column) || 1;
      str += "\n --> " + loc + "\n"
          + filler + " |\n"
          + offset_s.line + " | " + line + "\n"
          + filler + " | " + peg$padEnd("", s.column - 1, ' ')
          + peg$padEnd("", hatLen, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};
  var peg$source = options.grammarSource;

  var peg$startRuleFunctions = { Path: peg$parsePath };
  var peg$startRuleFunction = peg$parsePath;

  var peg$c0 = ".";
  var peg$c1 = ",";

  var peg$r0 = /^[mM]/;
  var peg$r1 = /^[zZ]/;
  var peg$r2 = /^[lL]/;
  var peg$r3 = /^[hH]/;
  var peg$r4 = /^[vV]/;
  var peg$r5 = /^[qQ]/;
  var peg$r6 = /^[tT]/;
  var peg$r7 = /^[cC]/;
  var peg$r8 = /^[sS]/;
  var peg$r9 = /^[aA]/;
  var peg$r10 = /^[0-1]/;
  var peg$r11 = /^[eE]/;
  var peg$r12 = /^[+\-]/;
  var peg$r13 = /^[0-9]/;
  var peg$r14 = /^[ \t\n\r]/;

  var peg$e0 = peg$classExpectation(["m", "M"], false, false);
  var peg$e1 = peg$classExpectation(["z", "Z"], false, false);
  var peg$e2 = peg$classExpectation(["l", "L"], false, false);
  var peg$e3 = peg$classExpectation(["h", "H"], false, false);
  var peg$e4 = peg$classExpectation(["v", "V"], false, false);
  var peg$e5 = peg$classExpectation(["q", "Q"], false, false);
  var peg$e6 = peg$classExpectation(["t", "T"], false, false);
  var peg$e7 = peg$classExpectation(["c", "C"], false, false);
  var peg$e8 = peg$classExpectation(["s", "S"], false, false);
  var peg$e9 = peg$classExpectation(["a", "A"], false, false);
  var peg$e10 = peg$classExpectation([["0", "1"]], false, false);
  var peg$e11 = peg$literalExpectation(".", false);
  var peg$e12 = peg$classExpectation(["e", "E"], false, false);
  var peg$e13 = peg$classExpectation(["+", "-"], false, false);
  var peg$e14 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e15 = peg$literalExpectation(",", false);
  var peg$e16 = peg$otherExpectation("whitespace");
  var peg$e17 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false);

  var peg$f0 = function(cmd) { return cmd; };
  var peg$f1 = function(cmd, data) { return { cmd, data }; };
  var peg$f2 = function() { return { cmd: 'Z' }; };
  var peg$f3 = function(cmd, data) { return { cmd, data }; };
  var peg$f4 = function(cmd, data) { return { cmd, data }; };
  var peg$f5 = function(cmd, data) { return { cmd, data }; };
  var peg$f6 = function(cmd, data) { return { cmd, data }; };
  var peg$f7 = function(cmd, data) { return { cmd, data }; };
  var peg$f8 = function(cmd, data) { return { cmd, data }; };
  var peg$f9 = function(cmd, data) { return { cmd, data }; };
  var peg$f10 = function(cmd, data) {
    const arcData = data.reduce((result, element) => {
      const radius = element[0];
      const rotation = element[2];
      const largeArc = element[4];
      const sweepFlag = element[6];
      const to = element[8];
      
      result.push({ radius, rotation, largeArc, sweepFlag, to });
      return result;
    }, []);
    
    return { cmd, data: arcData };
  };
  var peg$f11 = function(n) { return n; };
  var peg$f12 = function(x, y) { return { x, y }; };
  var peg$f13 = function(first, second) { return { first, second }; };
  var peg$f14 = function(first, second, third) { return { first, second, third }; };
  var peg$f15 = function(data) {
  	return data.reduce((result, element) => {
      result.push(element[0])
      return result;
    }, []);
  };
  var peg$f16 = function(data) {
    return data.reduce((result, element) => {
      result.push(element[0]);
      return result;
    }, []);
  };
  var peg$f17 = function(data) {
    return data.reduce((result, element) => {
      result.push(element[0]);
      return result;
    }, []);
  };
  var peg$f18 = function(data) {
    return data.reduce((result, element) => {
      result.push(element[0]);
      return result;
    }, []);
  };
  var peg$f19 = function(parts) { return parts.join('') * 1; };
  var peg$f20 = function(parts) { return parts.join(''); };
  var peg$f21 = function(parts) { return parts.join(''); };
  var peg$f22 = function(parts) { return parts.join(''); };
  var peg$f23 = function(digits) { return digits.join(''); };
  var peg$currPos = options.peg$currPos | 0;
  var peg$savedPos = peg$currPos;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = peg$currPos;
  var peg$maxFailExpected = options.peg$maxFailExpected || [];
  var peg$silentFails = options.peg$silentFails | 0;

  var peg$result;

  if (options.startRule) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return {
      source: peg$source,
      start: peg$savedPos,
      end: peg$currPos
    };
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      if (pos >= peg$posDetailsCache.length) {
        p = peg$posDetailsCache.length - 1;
      } else {
        p = pos;
        while (!peg$posDetailsCache[--p]) {}
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  function peg$computeLocation(startPos, endPos, offset) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);

    var res = {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
    if (offset && peg$source && (typeof peg$source.offset === "function")) {
      res.start = peg$source.offset(res.start);
      res.end = peg$source.offset(res.end);
    }
    return res;
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsePath() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseCmdPrimitive();
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseCmdPrimitive();
    }

    return s0;
  }

  function peg$parseCmdPrimitive() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse_();
    s2 = peg$parseMoveTo();
    if (s2 === peg$FAILED) {
      s2 = peg$parseClosePath();
      if (s2 === peg$FAILED) {
        s2 = peg$parseLineTo();
        if (s2 === peg$FAILED) {
          s2 = peg$parseHorizontalTo();
          if (s2 === peg$FAILED) {
            s2 = peg$parseVerticalTo();
            if (s2 === peg$FAILED) {
              s2 = peg$parseQuadraticTo();
              if (s2 === peg$FAILED) {
                s2 = peg$parseSmoothQuadraticTo();
                if (s2 === peg$FAILED) {
                  s2 = peg$parseCubicTo();
                  if (s2 === peg$FAILED) {
                    s2 = peg$parseSmoothCubicTo();
                    if (s2 === peg$FAILED) {
                      s2 = peg$parseArcTo();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_();
      peg$savedPos = s0;
      s0 = peg$f0(s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseMoveTo() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r0.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e0); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSomeCoordinatePairs();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f1(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseClosePath() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r1.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e1); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f2();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseLineTo() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r2.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e2); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSomeCoordinatePairs();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f3(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseHorizontalTo() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r3.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e3); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSomeCoordinates();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f4(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseVerticalTo() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r4.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSomeCoordinates();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f5(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseQuadraticTo() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r5.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e5); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSomeCoordinateDoubles();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f6(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSmoothQuadraticTo() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r6.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e6); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSomeCoordinatePairs();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f7(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCubicTo() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r7.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e7); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSomeCoordinateTriples();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f8(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSmoothCubicTo() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r8.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e8); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSomeCoordinateDoubles();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f9(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseArcTo() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

    s0 = peg$currPos;
    s1 = input.charAt(peg$currPos);
    if (peg$r9.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e9); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parseCoordinatePair();
      if (s4 !== peg$FAILED) {
        s5 = peg$parseComma();
        s6 = peg$parseNumber();
        if (s6 !== peg$FAILED) {
          s7 = peg$parseComma();
          s8 = peg$parseLargeArc();
          if (s8 !== peg$FAILED) {
            s9 = peg$parseComma();
            s10 = peg$parseSweepFlag();
            if (s10 !== peg$FAILED) {
              s11 = peg$parseComma();
              s12 = peg$parseCoordinatePair();
              if (s12 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7, s8, s9, s10, s11, s12];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseCoordinatePair();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseComma();
            s6 = peg$parseNumber();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseComma();
              s8 = peg$parseLargeArc();
              if (s8 !== peg$FAILED) {
                s9 = peg$parseComma();
                s10 = peg$parseSweepFlag();
                if (s10 !== peg$FAILED) {
                  s11 = peg$parseComma();
                  s12 = peg$parseCoordinatePair();
                  if (s12 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7, s8, s9, s10, s11, s12];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f10(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCoordinate() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse_();
    s2 = peg$parseNumber();
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_();
      peg$savedPos = s0;
      s0 = peg$f11(s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCoordinatePair() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseCoordinate();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseComma();
      s3 = peg$parseCoordinate();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f12(s1, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCoordinateDouble() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseCoordinatePair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseComma();
      s3 = peg$parseCoordinatePair();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f13(s1, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCoordinateTriple() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseCoordinatePair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseComma();
      s3 = peg$parseCoordinatePair();
      if (s3 !== peg$FAILED) {
        s4 = peg$parseComma();
        s5 = peg$parseCoordinatePair();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f14(s1, s3, s5);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLargeArc() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r10.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e10); }
    }

    return s0;
  }

  function peg$parseSweepFlag() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r10.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e10); }
    }

    return s0;
  }

  function peg$parseSomeCoordinates() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parseCoordinate();
    if (s3 !== peg$FAILED) {
      s4 = peg$parseComma();
      s3 = [s3, s4];
      s2 = s3;
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseCoordinate();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseComma();
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f15(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseSomeCoordinatePairs() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parseCoordinatePair();
    if (s3 !== peg$FAILED) {
      s4 = peg$parseComma();
      s3 = [s3, s4];
      s2 = s3;
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseCoordinatePair();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseComma();
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f16(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseSomeCoordinateDoubles() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parseCoordinateDouble();
    if (s3 !== peg$FAILED) {
      s4 = peg$parseComma();
      s3 = [s3, s4];
      s2 = s3;
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseCoordinateDouble();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseComma();
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f17(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseSomeCoordinateTriples() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parseCoordinateTriple();
    if (s3 !== peg$FAILED) {
      s4 = peg$parseComma();
      s3 = [s3, s4];
      s2 = s3;
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseCoordinateTriple();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseComma();
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f18(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseNumber() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseSign();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    s3 = peg$parseFloatConstant();
    if (s3 !== peg$FAILED) {
      s2 = [s2, s3];
      s1 = s2;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parseSign();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s3 = peg$parseDigitSequence();
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f19(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseFloatConstant() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseFractionalConstant();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseExponent();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s2 = [s2, s3];
      s1 = s2;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parseDigitSequence();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseExponent();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f20(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseFractionalConstant() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseDigitSequence();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (input.charCodeAt(peg$currPos) === 46) {
      s3 = peg$c0;
      peg$currPos++;
    } else {
      s3 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e11); }
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$parseDigitSequence();
      if (s4 !== peg$FAILED) {
        s2 = [s2, s3, s4];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parseDigitSequence();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s3 = peg$c0;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e11); }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f21(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseExponent() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = input.charAt(peg$currPos);
    if (peg$r11.test(s2)) {
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e12); }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parseSign();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s4 = peg$parseDigitSequence();
      if (s4 !== peg$FAILED) {
        s2 = [s2, s3, s4];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f22(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseSign() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r12.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e13); }
    }

    return s0;
  }

  function peg$parseDigitSequence() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = input.charAt(peg$currPos);
    if (peg$r13.test(s2)) {
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e14); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = input.charAt(peg$currPos);
        if (peg$r13.test(s2)) {
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e14); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f23(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseComma() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (input.charCodeAt(peg$currPos) === 44) {
      s2 = peg$c1;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e15); }
    }
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    s3 = peg$parse_();
    s1 = [s1, s2, s3];
    s0 = s1;

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    s1 = input.charAt(peg$currPos);
    if (peg$r14.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e17); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = input.charAt(peg$currPos);
      if (peg$r14.test(s1)) {
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e17); }
      }
    }
    peg$silentFails--;
    s1 = peg$FAILED;
    if (peg$silentFails === 0) { peg$fail(peg$e16); }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (options.peg$library) {
    return /** @type {any} */ ({
      peg$result,
      peg$currPos,
      peg$FAILED,
      peg$maxFailExpected,
      peg$maxFailPos
    });
  }
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

const peg$allowedStartRules = [
  "Path"
];

export {
  peg$allowedStartRules as StartRules,
  peg$SyntaxError as SyntaxError,
  peg$parse as parse
};
