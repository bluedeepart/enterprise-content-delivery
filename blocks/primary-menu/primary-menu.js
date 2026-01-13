import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const fragment = await loadFragment('/fragments/primary-menu');
  const menuList = fragment.querySelector('ul');

  if (!menuList) return;

  menuList.className = 'menu-list';

  menuList.querySelectorAll('li').forEach((li) => {
    const subMenu = li.querySelector(':scope > ul');
    if (!subMenu) return;

    subMenu.className = 'sub-menu-list';

    const toggle = document.createElement('button');
    toggle.className = 'arrow-icon';
    toggle.type = 'button';
    toggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
      </svg>
    `;

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      li.classList.toggle('list-open');
    });

    const link = li.querySelector(':scope > a');
    if (link) link.appendChild(toggle);
  });

  block.append(menuList);
}
