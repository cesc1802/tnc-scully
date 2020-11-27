import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <p class="font-bold mb-4 text-xl">Thược Nguyễn (Cesc)</p>
    <p class="font-hairline mb-4">
      Tôi là một lập trình viên dạo. Tôi thích Backend. Hiện tại tôi đang tìm hiểu Golang (Gin) và Typescript (Nestjs)
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {}
