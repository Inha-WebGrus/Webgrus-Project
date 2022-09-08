package com.webgrus.inplace.service

import org.springframework.stereotype.Service
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@Service
class MailService(
    private val mailSender: JavaMailSender,
) {

    fun sendMail(to: String, title: String, content: String) {
        val message = SimpleMailMessage()
        message.setTo(to)
        message.setFrom("inplace.2022@gmail.com")
        message.setSubject(title)
        message.setText(content)

        mailSender.send(message)
    }

}