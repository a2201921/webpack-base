const assert = require('assert');
describe('webpack.base.js test case', () => {
    const baseConfig  = require('../../lib/webpack.base.js')
    console.log(baseConfig)
    it('entry', ()=> {
        assert.equal(baseConfig.entry.index, baseConfig.entry.index.indexOf('webpack-base/test/smoke/template/src/index/index.js')>-1, true)
        assert.equal(baseConfig.entry.search, baseConfig.entry.search.indexOf('webpack-base/test/smoke/template/src/search/index.js')>-1, true)
    })
})