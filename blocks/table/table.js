export default function decorate(block) {
  const rows = [...block.children];

  block.classList.add('table-card');

  rows.forEach((row) => {
    const cells = [...row.children];

    if (cells.length === 1) {
      row.classList.add('table-header');
    } else {
      row.classList.add('table-row');
    }
  });
}
