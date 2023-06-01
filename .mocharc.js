'use strict';

// This is a JavaScript-based config file containing every Mocha option plus others.
// If you need conditional logic, you might want to use this type of config,
// e.g. set options via environment variables 'process.env'.
// Otherwise, JSON or YAML is recommended.

module.exports = {
  //   'allow-uncaught': false,
  //   'async-only': false,
  //   bail: false,
  //   'check-leaks': false,
  color: true,
  //   delay: false,
  //   diff: true,
  //   exit: false, // could be expressed as "'no-exit': true"
  //   extension: ['js'],
  //   'fail-zero': true,
  //   fgrep: 'something', // fgrep and grep are mutually exclusive
  file: ['./test.js'],
  //   'forbid-only': false,
  //   'forbid-pending': false,
  //   'full-trace': false,
  //   global: ['jQuery', '$'],
  //   grep: /something/i, // also 'something', fgrep and grep are mutually exclusive
  //   growl: false,
  //   ignore: ['/path/to/some/ignored/file'],
  //   'inline-diffs': false,
  //   // invert: false, // needs to be used with grep or fgrep
  //   jobs: 1,
  //   'node-option': ['unhandled-rejections=strict'], // without leading "--", also V8 flags
  package: './package.json',
  //   parallel: false,
  //   recursive: false,
  //   reporter: 'Doc',
  //   Reporters. 2.1. Spec. 2.2. Dot-matrix. 2.3. Nyan. 2.4. Tap. 2.5. Landing Strip. 2.6. List. 2.7. Progress. 2.8. JSON. 2.9. JSON stream. 2.10. Min. 2.11. Doc. 2.12. Markdown. 2.13. Third-party reporters.
  //   'reporter-option': ['foo=bar', 'baz=quux'], // array, not object
  //   require: '@babel/register',
  //   retries: 1,
  //   slow: '75',
  //   sort: false,
  //   spec: ['test/**/*.spec.js'], // the positional arguments!
  //   timeout: '2000', // same as "timeout: '2s'"
  //   // timeout: false, // same as "timeout: 0"
  //   'trace-warnings': true, // node flags ok
  //   ui: 'bdd',
  //   'v8-stack-trace-limit': 100, // V8 flags are prepended with "v8-"
  //   watch: false,
  //   'watch-files': ['lib/**/*.js', 'test/**/*.js'],
  //   'watch-ignore': ['lib/vendor'],
};
