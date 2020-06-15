import { storiesOf } from '@storybook/vue'
import ${NAME}Story from './${NAME}Story'
import { createStore } from '../createStore'

const store = createStore({ devtools: false })

storiesOf('', module)
  .add('${NAME}', () => ({
    store,
    components: { ${NAME}Story },
    template: `<${NAME}Story />`
  }))
