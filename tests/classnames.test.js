const Dhow = require('../src/jsx-runtime.cjs')
const { startService } = require('esbuild')

test('setting the style attribute as a string for inline styles', async (done) => {
    const service = await startService()

    try {
        const parsed = await service.transform(
            `return <div class="foo bar foo-bar"></div>`,
            {
                loader: 'jsx',
                jsxFactory: 'Dhow.el',
                jsxFragment: 'Dhow.fragment',
            }
        )

        const actualResult = `<div class="foo bar foo-bar"></div>`

        const evaluated = new Function('Dhow', parsed.js)
        expect(evaluated(Dhow).toString()).toBe(actualResult)
        done()
    } catch (err) {
        done(err)
    } finally {
        service.stop()
    }
})