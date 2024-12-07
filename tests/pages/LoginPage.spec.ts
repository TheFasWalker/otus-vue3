import {describe ,expect,it,vi } from "vitest";
import { mount } from "@vue/test-utils";
import FormComponent from '../../src/pages/Login.vue';

import { createRouter, createWebHistory } from 'vue-router';





describe('LoginForm page',()=>{
    
    const buildWrapper = (options = {}) => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [
              {
                path: '/',
                name: 'home',
                component: { template: '<div></div>' }
              }
            ]
          })
        return mount(FormComponent, {
            global: {
                plugins: [router]
            },
            ...options
        });
    };

    it('renders without errors',()=>{
        const wrapper = buildWrapper()
        expect(wrapper.exists()).toBeTruthy()
    })
})