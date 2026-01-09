import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const fragment = await loadFragment('/primary-menu');
  const menuList = fragment.querySelector('ul');
  block.append(menuList);
}
