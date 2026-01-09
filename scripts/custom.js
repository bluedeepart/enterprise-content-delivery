// export function manageContentSpace() {
//   const header = document.querySelector('header.header, header .header');
//   const main = document.querySelector('main');

//   if (!header || !main) return;

//   const apply = () => {
//     const height = Math.ceil(header.getBoundingClientRect().height);
//     main.style.paddingTop = `${height}px`;
//   };

//   // Run once
//   apply();

//   // React to every real header size change (Franklin decorations, fonts, breakpoints)
//   const observer = new ResizeObserver(apply);
//   observer.observe(header);

//   // Fallback for older browsers
//   window.addEventListener('resize', apply);
// }

// export function test() {
//   // eslint-disable-next-line no-console
//   console.log(678);
// }
