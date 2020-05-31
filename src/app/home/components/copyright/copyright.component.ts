import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `
    <p class="text-gray-400 font-thin text-sm">© All rights reserved.</p>
    <p class="text-gray-400 font-thin text-sm ml-1 mt-0 lg:mt-2 lg:ml-0">
      Built with
      <a
        href="https://angular.io"
        target="_blank"
        class="cursor-pointer text-primary hover:underline"
      >
        Angular
      </a>
      and
      <a
        href="https://scully.io"
        target="_blank"
        class="cursor-pointer text-primary hover:underline"
      >
        Scully
      </a>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyrightComponent {
  @HostBinding('class') copyrightClasses = 'flex flex-row lg:flex-col';
}
