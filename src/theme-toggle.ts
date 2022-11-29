const THEME_STORAGE_KEY = 'theme-preference';

let preference: string = getColorPreference();

function onToggleClick() {
  preference = preference === 'light' ? 'dark' : 'light';
  setColorPreference();
}

window.onload = () => {
  applyPreferenceToDom();
  document
    .querySelector('#theme-toggle')
    ?.addEventListener('click', onToggleClick);
};

function onPrefersColorSchemeChange(event: MediaQueryListEvent) {
  preference = event.matches ? 'dark' : 'light';
  setColorPreference();
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', onPrefersColorSchemeChange);

/**
 * PRIVATE HELPERS
 */

function getColorPreference() {
  if (localStorage.getItem(THEME_STORAGE_KEY)) {
    return localStorage.getItem(THEME_STORAGE_KEY) as string;
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}

function applyPreferenceToDom() {
  document.firstElementChild?.setAttribute('data-theme', preference);
  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', preference);
}

function setColorPreference() {
  localStorage.setItem(THEME_STORAGE_KEY, preference);
  applyPreferenceToDom();
}

export {};
