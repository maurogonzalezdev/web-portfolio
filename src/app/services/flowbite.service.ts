import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  loadFlowbite(callback: (flowbite: any) => void) {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then(flowbite => {
        callback(flowbite);

        if (
          localStorage.getItem('color-theme') === 'dark' ||
          (!('color-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        // Change the icons inside the button based on previous settings
        const themeToggleDarkIcon = document.getElementById(
          'theme-toggle-dark-icon'
        );
        const themeToggleLightIcon = document.getElementById(
          'theme-toggle-light-icon'
        );

        if (
          localStorage.getItem('color-theme') === 'dark' ||
          (!('color-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          themeToggleLightIcon!.classList.remove('hidden');
        } else {
          themeToggleDarkIcon!.classList.remove('hidden');
        }

        const themeToggleBtn = document.getElementById('theme-toggle');

        themeToggleBtn!.addEventListener('click', () => {
          // Toggle icons inside button
          themeToggleDarkIcon!.classList.toggle('hidden');
          themeToggleLightIcon!.classList.toggle('hidden');

          // If set via local storage previously
          if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
            } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
            }

            // If NOT set via local storage previously
          } else {
            if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
            } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
            }
          }
        });
      });
    }
  }
}
