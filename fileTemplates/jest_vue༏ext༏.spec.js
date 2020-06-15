import { shallowMount } from '@vue/test-utils'
import ${NAME} from './${NAME}';

describe('${NAME}', () => {
  test('Render', () => {
    const wrapper = shallowMount(${NAME}, {
      propsData: {
        prop: 1
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})