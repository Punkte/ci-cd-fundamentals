import { rehypeCode, rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import {
  transformerNotationDiff,
} from '@shikijs/transformers'
import { transformerTwoslash } from 'fumadocs-twoslash';



// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [rehypeCode],
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      langs: [
        'typescript',
        'javascript',
        'js',
        'bash',
      ],
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
        transformerNotationDiff({
          matchAlgorithm: 'v3',
        })
      ],
    },
  },
});
