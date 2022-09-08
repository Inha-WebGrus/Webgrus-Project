package com.webgrus.inplace.controller

import io.swagger.annotations.Api
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RestController
import springfox.documentation.annotations.ApiIgnore

@Api(description = "일정 API")
@RestController
class CalendarController {

    @GetMapping("/calendar")
    fun getCalendars() {

    }

    @PostMapping("/calendar")
    fun postCalendar(
            @RequestHeader authorization: String,
            @ApiIgnore @AuthenticationPrincipal user: UserDetails
    ) {

    }

}