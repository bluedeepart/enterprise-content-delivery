export default function decorate(block) {
  const list = block.querySelector('ul');
  if (!list) return;

  block.classList.add('arch-diagram');

  const items = [...list.children];

  items.forEach((li) => {
    const label = li.textContent.trim();
    li.textContent = '';

    li.classList.add('arch-item');

    const box = document.createElement('div');
    box.className = 'arch-box';
    box.textContent = label;

    const arrow = document.createElement('span');
    arrow.className = 'arch-arrow';
    arrow.textContent = '→';

    li.append(box, arrow);
  });

  // Remove arrow from last item
  const last = items[items.length - 1];
  if (last) last.querySelector('.arch-arrow')?.remove();
}
