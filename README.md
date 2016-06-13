:package: Width adjuster
---

:construction: WIP :construction:

![width-adjuster](https://cloud.githubusercontent.com/assets/1548478/15989441/7cd6121c-30b1-11e6-8333-feca102ec238.gif)

:beginner: Usage
---
* `git clone https://github.com/59naga/width-adjuster`
* `cd width-adjuster`
* `npm install`
* `npm run build`
* `cd release`
* `python -m SimpleHTTPServer`
* `open http://localhost:59798/width-adjuster.html`
* show dev console, type to `localStorage.setItem('width-adjuster', 'http://example.com')`
* have fun! :+1:

:wrench: Development
---
Requirement global
* NodeJS **v6.2.1** [See](http://node.green/)
* Npm v3.9.3 (or [pnpm](https://github.com/rstacruz/pnpm))

```bash
git clone https://github.com/59naga/your-module-name
cd your-module-name
npm install

npm start
```

:wind_chime: Available npm-scripts
---
* `npm start`
  ship `src` to `release` for each `js`,`pug`,`styl`. live compiling(ignore add file) and live-reload
* `npm run build`
  ship `src` to `release`. without live, compression, unify to `width-adjuster-html`.

<br><br>
<p align="right">
  <a href="http://59naga.mit-license.org/">
    MIT License :clipboard:
  </a>
</p>
