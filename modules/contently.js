import posts from '../posts'

export default function() {
  this.nuxt.hook('build:compile', ({ compiler }) => {
    compiler.plugin('emit', async (compilation, cb) => {
      const results = await posts()

      for (const post of results) {
        const json = JSON.stringify(post)
        // this will render a json file for each post at /_nuxt/posts/slug.json
        compilation.assets[`posts/${post.slug}.json`] = {
          source: () => json,
          size: () => json.length
        }
      }

      const index = JSON.stringify(
        results.map(({ slug, attributes }) => ({
          slug,
          attributes
        }))
      )
      // render a json file for the blog index as well
      compilation.assets[`posts.json`] = {
        source: () => index,
        size: () => index.length
      }

      cb()
    })
  })
}
