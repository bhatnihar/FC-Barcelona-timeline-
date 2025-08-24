export function getFocusableElements(root: HTMLElement): HTMLElement[] {
const selectors = [
'a[href]',
'button:not([disabled])',
'textarea:not([disabled])',
'input:not([disabled])',
'select:not([disabled])',
'[tabindex]:not([tabindex="-1"])',
];
return Array.from(root.querySelectorAll<HTMLElement>(selectors.join(',')))
.filter(el => !el.hasAttribute('inert') && el.getAttribute('aria-hidden') !== 'true');
}