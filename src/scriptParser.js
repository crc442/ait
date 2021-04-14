import acorn from 'acorn'

const { parse } = acorn;

const scriptParser = (source) => {
  const ast = parse(source, { sourceType: 'module' })
  console.log(ast)

  ast.body.forEach(d => {
    if (d.type === 'LabeledStatement' && d.label.name === 'state') {

    }
  })
  let props = []
  let rest = []

  return { props, rest }
}
export default scriptParser;
