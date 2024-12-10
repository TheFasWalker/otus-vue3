import { describe ,expect,it } from "vitest";
import { mount } from "@vue/test-utils";
import component from '../src/components/notification/ErrorNitification.vue'

describe('ErrorNotification testing',()=>{
    const buildWrapper = (char) =>{
        return mount(component,{
            char
        })
    }
    it('ErrorNotification mount withoit errors',()=>{
        const wrapper = buildWrapper('error fetching')
        expect(wrapper.exists()).toBeTruthy()

    })
    it('ErrorNotification emit false on click ', async ()=>{
        const wrapper = buildWrapper('error fetching')
        const button = wrapper.find('button')
        expect(button.exists()).toBeTruthy()
        await button.trigger('click')
        expect(wrapper.emitted('close-notification')).toHaveLength(1);
        expect(wrapper.emitted('close-notification')[0]).toEqual([false])
    })
})