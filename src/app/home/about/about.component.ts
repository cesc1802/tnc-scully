import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p class="font-thin text-lg mb-2">Hello world,</p>
    <p class="font-thin text-lg mb-2">
      Như các bạn đã biết, tôi là Thược. Hiện tại tối đang làm lập trình viên Backend
    </p>
    <p class="font-thin text-lg mb-2">
      Đây là nơi tôi dùng để chia sẻ về những hiểu biết của mình về lập trình. 
      Blog sẽ tập chung nói về phát triển Backend sử dung Golang là chính hoặc có thể là một vài hoạt động hằng ngày của tôi. 
      Blog cá nhân của tôi được cung cấp bởi
      <a
        href="https://angular.io"
        rel="noreferrer"
        target="_blank"
        class="text-primary underline cursor-pointer"
      >
        Angular
      </a>
      and
      <a
        href="https://scully.io"
        rel="noreferrer"
        target="_blank"
        class="text-primary underline cursor-pointer"
      >
        Scully
      </a>
    </p>
    <p class="font-thin text-lg mb-2">
      Tôi hi vọng, bạn sẽ tích luỹ được kiến thức gì đó (kiến thức, một vài luân điểm, hoặc có thể sự vui vẻ trong cuộc sống hằng này) ở trên blog. 
      Nếu bạn có bất cứ câu hỏi nào hoặc bất cứ điều gì bạn muốn làm. 
      Đừng ngần ngại, hay liên hệ với tôi bất cứ phương tiện xã hội nào. 
      Cảm ơn! 👋
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
