---
title: Channels in Golang
description: Trong bài này mình sẽ giới thiệu với các bạn một vài các khái niệm cơ bản về Channels trong Golang.
date: '2020-11-27'
published: true
slug: 'channels'
tags: ['Golang']
---

Chào các bạn, mình lại tiếp tục với chuỗi ngày về Golang. Hôm nay mình sẽ giới thiệu với các bạn về **Channels**.

Như đã đề cập ở phần trước, **Channels** là một cấu trúc dữ liệu giúp bạn giao tiếp giữa các goroutines. **Channels** giúp lập trình viên tránh được những vấn đề thường thấy trong những ngôn ngữ lập trình cho phép truy cập bộ nhớ dùng chung. Một nhiệm vụ rất khó của lập trình concurrency đó là chắc chắn dữ liệu của bạn không bất ngờ bị thay đổi bởi những tác vụ chạy đồng thời (processes, thread or goroutines). Khi nhiều luồng (threads) truy cập đồng thời một dữ liệu (cùng một vùng nhớ) mà không bị khoá (lock) hoặc đồng bộ hoá, sẽ xảy ra việc không kiểm soát được sự thay đổi dữ liệu. Trong những ngôn ngữ khác, khi bạn có biến toàn cục (global variables) và chia sẻ vùng nhớ của nó. Bạn bắt buộc phải sử dụng quy tắc khoá phức tạp để tránh việc thay đổi  không đồng bộ trên cùng một biến (same variables). Trong Golang **Channels** đã cung cấp một giải pháp giúp bạn xử lý vấn đề này. **Channels** giúp bạn chắc chắc chỉ có *một và chỉ một* goroutine được phép thay đổi dữ liệu tại bất cứ thời điểm nào.

![Hình minh hoạ](https://images.viblo.asia/c0a34913-c4aa-4d7a-9743-dbd84befbe9a.png)

Vậy nơi nào trong ứng dụng của bạn sẽ sử dụng  *channels* để giao tiếp giữa các *goroutines*. Hãy tưởng tượng, trong một ứng dụng có nhiều quy trình khác nhau cần biết hoặc sửa đổi dữ liệu một cách có thứ tự. Sử dụng *goroutines* và *channels*, bạn có thể mô hình hoá quá trình này một cách an toàn. Trong hình mình hoạ ở trên, bạn thấy 3 *goroutines* và 2 **unbuffered channels** (cái này mình sẽ nói ở những bài sau). *Goroutine* đầu tiên sử dụng *channel* để truyền dữ liệu cho *goroutine* thứ hai đã sẵn sàng. Quá trình chuyển đổi dữ liệu giữa hai *goroutines* là đồng bộ hoá, một khi quá trình trao đổi xảy ra, cả hai goroutines đều biết sự thay đổi đã diễn ra. Sau khi goroutine thứ hai thực hiện một vài tác vụ với dữ liệu, nó sẽ gửi dữ liệu đó đến một goroutine thứ ba đang chờ đợi. Và tất nhiên quá trình trao đổi cũng diễn ra đồng bộ, và cả hai goroutines đều có thể đảm bảo việc trao đổi đã được thực hiện. Việc trao đổi dữ liệu giữa các *goroutines* diễn ra một cách an toàn và không yêu cầu khoá (lock) hoặc cơ chế đồng bộ hoá.

Điều rất quan trọng mà các bạn cần chú ý, đó là *channels* không cung cấp **bất cứ phương thức bảo vệ** truy cập dữ liệu giữa các *goroutines*. Nếu các bản sao của dữ liệu được trao đổi thông qua một *channels*, thì mỗi *goroutine* sẽ có một bản sao riêng, và thực hiện thay đổi bất cứ thay đổi gì với dữ liệu đó một cách an toàn. Khi con trỏ đang trỏ đến dữ liệu được trao đổi, mỗi *goroutine* cũng cần được đồng bộ hoá nếu việc đọc và ghi (reads and writes) vẫn được thực hiện ở các *goroutines* khác nhau.

Mình sẽ kết thúc bài viết tại đây. Mọi thắc mắc các bạn cứ đặt ở phần comment nhé, mình sẽ cố gắng tìm hiểu và giải đáp những câu hỏi của các bạn. Cảm ơn các bạn đã đọc bài của mình :)
