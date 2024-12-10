import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import LoginForm from '../../src/pages/Login.vue'; // Assuming your component is in LoginForm.vue
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';

vi.mock('vue-router', () => ({
  useRouter: vi.fn(),
}));

vi.mock('vee-validate', () => ({
  useForm: vi.fn(),
}));


describe('LoginForm', () => {
  const mockRouterPush = vi.fn();
  vi.mocked(useRouter).mockReturnValue({ push: mockRouterPush });

  const mockUseFormReturnValue = {
    errors: {}, // Initially no errors
    defineField: (fieldName) => [fieldName, {}],
    handleSubmit: (fn) => fn,
    resetForm: vi.fn(),
  };
  vi.mocked(useForm).mockReturnValue(mockUseFormReturnValue);

  it('renders without errors', () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays error messages when validation fails', async () => {
    vi.mocked(useForm).mockReturnValue({
      errors: { email: 'Невалидный email', password: 'минимум 6 знаков' },
      defineField: (fieldName) => [fieldName, {}],
      handleSubmit: (fn) => fn,
      resetForm: vi.fn(),
    });

    const wrapper = mount(LoginForm);
    const emailError = wrapper.find(`[data-testid="email-error"]`);
    const passwordError = wrapper.find(`[data-testid="password-error"]`);

    expect(emailError.text()).toBe('Невалидный email');
    expect(passwordError.text()).toBe('минимум 6 знаков');
  });

  it('updates model values correctly', async () => {
    const wrapper = mount(LoginForm);
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password123');

    expect(emailInput.element.value).toBe('test@example.com');
    expect(passwordInput.element.value).toBe('password123');
  });

  it('InputComp handles blur event', async () => {
    const wrapper = mount(LoginForm);
    const emailInput = wrapper.find('input[name="email"]');
    await emailInput.trigger('blur');
   
  });

});