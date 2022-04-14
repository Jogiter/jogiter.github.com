---
title: tdd
tags:
---

# {{ $frontmatter.title }}

[[toc]]

## 涉及文档

+ [mocha](https://github.com/mochajs/mocha) ☕️ simple, flexible, fun javascript test framework for node.js & the browser
+ [chai-as-promised](https://github.com/domenic/chai-as-promised) Extends Chai with assertions about promises.

>[demo 仓库](https://github.com/Jogiter/tdd)

## mocha 测试常见问题

常见的 `promise`、`async/await`、`timeout` 测试

```js
// mocha-spec.js
const chai = require('chai');
const { expect, assert } = chai;
const timeout = 5000;
const delay = 1000;

const p = (status, timeout = 100) =>
  new Promise((resolve, reject) => {
    const test = () => {
      if (status === 'fulfilled') {
        resolve(status);
      } else {
        reject(status);
      }
    };

    setTimeout(test, timeout);
  });

describe('demo', function () {
  it('promise', (done) => {
    p('fulfilled').then((res) => {
      expect(res).to.equal('fulfilled');
      done();
    });
  });

  it('promise multi', function (done) {
    // 重新设置超时时间 > 执行时间
    this.timeout(5 * timeout);

    // done 会在 2200 后执行。超过了默认 2000
    p('fulfilled').then((res) => {
      expect(res).to.equal('fulfilled');

      p('fulfilled').then((res) => {
        expect(res).to.equal('fulfilled');
        done();
      });
    });
  });

  it('promise multi with delayed', function (done) {
    // 重新设置超时时间，如果不设置，则报错
    // 'Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called;if returning a Promise, ensure it resolves'
    this.timeout(timeout);

    // done 会在 2200 后执行。超过了默认 2000
    const test = () =>
      p('fulfilled').then((res) => {
        expect(res).to.equal('fulfilled');

        p('fulfilled').then((res) => {
          expect(res).to.equal('fulfilled');
          done();
        });
      });

    setTimeout(test, delay);
  });

  it('timeout', () => {
    this.timeout(1000);
    assert.ok(true);
  });

  it('timeout demo', function (done) {
    this.timeout(500);
    setTimeout(done, 300);
  });

  it('timeout with done', function (done) {
    this.timeout(timeout);
    const test = () => {
      assert.ok(true);
      done();
    };
    setTimeout(test, delay);
  });

  it('timeout with async done', function (done) {
    this.timeout(timeout);

    const test = async () => {
      const res = await p('fulfilled');
      expect(res).to.equal('fulfilled');
      done();
    };

    setTimeout(test, delay);
  });

  it('timeout with promise done', function (done) {
    this.timeout(timeout);

    const test = () => {
      p('rejected').catch((e) => {
        expect(e).to.equal('rejected');
        done();
      });
    };
    setTimeout(test, delay);
  });

  it('timeout with promise catch done', function (done) {
    this.timeout(timeout);

    const test = () => {
      p('rejected').catch((e) => {
        expect(e).to.equal('rejected');
        done();
      });
    };
    setTimeout(test, delay);
  });

  it('timeout with async catch done', function (done) {
    this.timeout(timeout);

    const test = async () => {
      try {
        const multiPromise = [
          await p('fulfilled'),
          await p('fulfilled'),
          await p('fulfilled'),
        ];

        for (let p of multiPromise) {
          expect(p).to.equal('fulfilled');
        }

        done();
      } catch (e) {
        done(e);
      }
    };

    setTimeout(test, delay);
  });
});
```

如果测试的结果返回的是一个 `Promise`，更多测试用例参考[chai-as-promised/test](https://github.com/domenic/chai-as-promised/tree/master/test)

```js
// chai setup
// https://github.com/domenic/chai-as-promised/blob/master/test/support/setup.js
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

const { expect, assert } = chai;

describe('demo', function () {
  // 参考 官方 demo
  // https://github.com/domenic/chai-as-promised/blob/master/test/should-eventually.js
});
```
