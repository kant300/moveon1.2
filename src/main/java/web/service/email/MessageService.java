package web.service.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

// 메일 전송용
@Service
public class MessageService {
    @Autowired
    private JavaMailSender mailSender; /* build grald 'implementation 'org.springframework.boot:spring-boot-starter-mail' 라이브러리 적용시에만 사용 가능 Spring 용 */

    // [mail01-1] 메일전송
    public void mailMessage(String a , String b, String c){
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(a); // 받는사람 메일 지정
        mailMessage.setSubject(b); // 메일 제목 내용 지정
        mailMessage.setText(c); // 메일 내용

        mailSender.send(mailMessage); // 위 내용 지정 후 메일 전송
    } // func end

    // [mail01-2] 메일전송 비동기화
    @Async
    public void asyncMail( String a , String b, String c ){
        mailMessage( a, b, c );
    } // func end
} // class end