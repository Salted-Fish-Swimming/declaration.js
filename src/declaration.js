
function decl (type, props, children) {
  const dom = document.createElement(type);
  const render = new Render(dom);

  render.render(props);


  return dom;
}

function declChildren (dom, children) {
  for (const child of children) {
    if (Array.isArray(child)) {
      declChildren(dom, child);
    } else {
      ;
    }
  }
}

const dec = (type) => (props) => (children) => decl(type, props, children);

export { dec };