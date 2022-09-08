package com.webgrus.inplace.controller

import com.webgrus.inplace.dto.auth.request.SignInRequest
import com.webgrus.inplace.dto.auth.request.SignUpRequest
import com.webgrus.inplace.dto.auth.response.TokenResponse
import com.webgrus.inplace.service.AuthService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@Api(description = "권한 API")
@RestController
class AuthController(
        private val authService: AuthService
) {

    @ApiOperation("로그인")
    @PostMapping("/user/sign-in")
    fun signIn(
            @ApiParam("Body")
            @RequestBody request: SignInRequest
    ): TokenResponse {
        return authService.signIn(request)
    }

    @ApiOperation("회원가입")
    @PostMapping("/user")
    fun signUp(
            @ApiParam("Body")
            @RequestBody request: SignUpRequest
    ) {
        authService.signUp(request)
    }

    @ApiOperation("유저 활성화")
    @PatchMapping("/user/active")
    fun updateUserActive(@RequestParam c: String) {
        authService.userActive()
    }

}