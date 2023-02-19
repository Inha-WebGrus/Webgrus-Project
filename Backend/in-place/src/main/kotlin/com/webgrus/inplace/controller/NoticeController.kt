package com.webgrus.inplace.controller

import com.webgrus.inplace.service.NoticeService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class NoticeController(
        private val noticeService: NoticeService,
) {

    @GetMapping("/notices")
    fun getNotices() {

    }

    @PostMapping("/notices")
    fun postNotices() {

    }

}