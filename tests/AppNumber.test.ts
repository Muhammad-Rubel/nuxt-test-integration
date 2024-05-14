import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import AppNumber from '~/components/AppNumber.vue';

describe('AppNumber', () => {
  it('can mount the component', async () => {
    const component = await mountSuspended(AppNumber);

    expect(component.html()).toContain('Number');
  });

  it('can render the route path', async () => {
    const component = await mountSuspended(AppNumber);

    expect(component.find('[data-test-id="route-path"]').text()).toBe('/');
  });
});
