# declaratio.js

这是一个基于 js 的声明式响应式 UI 框架。

示例

```javascript
import { dec, use } from 'declaration.js';

function App (prop) {
  const { meta, data } = use({
    input: { value: '' },
  });

  return (
    div ({
      class: ''
    }) (
      p ({}) (meta.value),
      input ({
        on: {
          input: (e) => data.input.value = e.target.value
        }
      }) (),
    )
  )
}

document.body.append(App());

```

