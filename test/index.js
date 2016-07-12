import StcLog from '../src/index.js';
import test from 'ava';

test('init, hasError & hasLog', t => {
  let instance = new StcLog();
  t.is(instance.hasError, false);
  t.is(instance.hasLog, false);
});

test('error', t => {
  let instance = new StcLog();
  instance.display = (message, type) => {
    t.is(message, 'error message');
    t.is(type, 'error')
  }
  instance.error('error message');
  t.is(instance.hasError, true);
})

test('warning', t => {
  let instance = new StcLog();
  instance.display = (message, type) => {
    t.is(message, 'warning message');
    t.is(type, 'warning')
  }
  instance.warning('warning message');
  t.is(instance.hasError, false);
})

test('notice', t => {
  let instance = new StcLog();
  instance.display = (message, type) => {
    t.is(message, 'notice message');
    t.is(type, 'notice')
  }
  instance.notice('notice message');
  t.is(instance.hasError, false);
})

test('display', t => {
  let instance = new StcLog();
  let log = console.log;
  console.log = message => {
    t.is(message.indexOf('log message') > -1, true)
  }
  instance.display('log message', 'notice');
  t.is(instance.hasLog, true);
  console.log = log;
})

test('display, object, has className', t => {
  let instance = new StcLog();
  let log = console.log;
  console.log = message => {
    t.is(message.indexOf('testPlugin') > -1, true)
  }
  instance.display({
    className: 'testPlugin',
    message: 'error message'
  }, 'error');
  t.is(instance.hasLog, true);
  console.log = log;
})

test('display, object, has file', t => {
  let instance = new StcLog();
  let log = console.log;
  console.log = message => {
    t.is(message.indexOf('a.js') > -1, true)
  }
  instance.display({
    file: 'a.js',
    message: 'error message'
  }, 'error');
  t.is(instance.hasLog, true);
  console.log = log;
})

test('display, object, has line', t => {
  let instance = new StcLog();
  let log = console.log;
  console.log = message => {
    t.is(message.indexOf('line: 2') > -1, true)
  }
  instance.display({
    file: 'a.js',
    line: 1, 
    column: 2,
    message: 'error message'
  }, 'error');
  t.is(instance.hasLog, true);
  console.log = log;
})

test('display, object, has line', t => {
  let instance = new StcLog();
  let log = console.log;
  console.log = message => {
    t.is(message.indexOf('column: 4') > -1, true)
  }
  instance.display({
    file: 'a.js',
    line: 1, 
    column: 3,
    message: 'error message'
  }, 'warning');
  t.is(instance.hasLog, true);
  console.log = log;
})