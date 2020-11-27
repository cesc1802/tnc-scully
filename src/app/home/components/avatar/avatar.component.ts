import { ApplicationRef, ChangeDetectionStrategy, Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first, mapTo, startWith, takeUntil } from 'rxjs/operators';
import { Destroyable } from '../../../shared/destroyable';

@Component({
  selector: 'app-avatar',
  template: `
    <div
      class="w-16 h-16 relative mb-4"
      [class.pointer-events-none]="!vm.hasUpdate"
      [class.cursor-pointer]="vm.hasUpdate"
      role="img"
      aria-label="Avatar of the blog author"
      *ngIf="{ hasUpdate: hasUpdate$ | async } as vm"
      (click)="reload(vm.hasUpdate)"
    >
      <div
        class="group w-full h-full rounded-full border-4 border-transparent text-center flex items-center relative avatar"
        [class.show]="vm.hasUpdate"
        [class.cursor-pointer]="vm.hasUpdate"
        [attr.data-tooltip]="'New version available 🚀'"
      >
        <img
          src="https://avatars3.githubusercontent.com/u/16495198?s=400&amp;u=7809a51124f7265ce39ff9e733078c3ab6208c0f&amp;v=4"
          alt="avatar"
          class="object-cover object-center rounded-full w-full h-full visible group-hover:hidden"
        />
      </div>
    </div>
  `,
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent extends Destroyable {
  hasUpdate$ = this.swUpdate.available.pipe(mapTo(true), startWith(false));

  constructor(readonly appRef: ApplicationRef, private readonly swUpdate: SwUpdate) {
    super();
    if (swUpdate.isEnabled) {
      const appIsStable$ = appRef.isStable.pipe(first((isStable) => isStable === true));
      const everyFiveMinutes$ = interval(5 * 60 * 1000); // every 5 minutes
      const everyFiveMinutesOnceAppIsStable$ = concat(appIsStable$, everyFiveMinutes$);
      everyFiveMinutesOnceAppIsStable$
        .pipe(takeUntil(this.$destroyed))
        .subscribe(() => swUpdate.checkForUpdate());
    }
  }

  reload(hasUpdate: boolean) {
    if (!hasUpdate) {
      return;
    }
    window?.location?.reload();
  }
}
