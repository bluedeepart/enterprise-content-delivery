export default async function decorate(block) {
  const heroImage = block.querySelector('img');
  const heroSection = block.closest('.section');
  if (heroImage?.src) {
    heroSection.style.backgroundImage = `url(${heroImage?.src})`;
    heroSection.classList.add('text-white', 'hero-bg');
    heroImage.closest('p').remove();
  }
}
