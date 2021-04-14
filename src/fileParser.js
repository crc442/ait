import pkg from 'parse5'
import { readFileSync } from 'fs'
import { notEqual } from 'assert';

const { parseFragment } = pkg

const fileParser = (file) => {
  const source = readFileSync(file, { encoding: 'utf-8' });
  const fragments = parseFragment(source);

  let code = ''
  let tags = []

  fragments.childNodes.forEach(node => {
    if (node.nodeName === 'script') {
      code += node.childNodes[0].value
    } else {
      tags.push(node)
    }
  })

  return { code, tags }
}

export default fileParser