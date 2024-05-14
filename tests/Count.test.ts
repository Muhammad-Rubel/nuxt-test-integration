import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Count from '~/components/Count.vue';

describe('Count', () => {
  it('can mount the component', async () => {
    const component = await mountSuspended(Count);

    expect(component.html()).toContain('Count');
  });

  it('can increment the count', async () => {
    const component = await mountSuspended(Count);

    await component.find('[data-test-id="increment"]').trigger('click');

    expect(component.find('[data-test-id="count-num"]').text()).toBe('2');
  });

  // test if data-test-id="data-test-id="lottie-container" has a svg element inside
  it('has a svg element inside the lottie ', async () => {
    const component = await mountSuspended(Count);

    expect(
      component.find('[data-test-id="lottie-container"] svg').exists()
    ).toBe(true);
  });
});
