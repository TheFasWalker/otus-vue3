import { describe ,it } from "vitest";
import { mount } from "@vue/test-utils";
import component from '../src/components/ui/ButtonEl.vue'

describe('buttonElement testing',()=>{
    const buildWrapper = (char) =>{
        return mount(component,{
            char
        })
    }
    it('buttonElement mount without errors',()=>{
        const wrapper = buildWrapper('buttons')
        expect(wrapper.exists()).toBeTruthy()

    })
    it('buttonElement emit event click ', async ()=>{
        const wrapper = buildWrapper('buttons')
        const button = wrapper.find('button')
        expect(button.exists()).toBeTruthy()
        await button.trigger('click')

    })

})