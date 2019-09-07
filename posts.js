import Contently from 'contently'
import ContentlySourceFs from 'contently-source-fs'
import ContentlyTransformMarkdown from 'contently-transform-markdown'

export default async function() {
  const { results } = await new Contently()
    .use(ContentlySourceFs, { patterns: 'posts/*.md' })
    .use(ContentlyTransformMarkdown)
    .run()

  return results
    .map((post) => {
      delete post.id
      return post
    })
    .sort((a, b) => (a.attributes.createdAt > b.attributes.createdAt ? -1 : 1))
}
