package com.webgrus.inplace.controller

import com.webgrus.inplace.dto.auth.request.SignInRequest
import com.webgrus.inplace.dto.auth.request.SignUpRequest
import com.webgrus.inplace.dto.auth.response.TokenResponse
import com.webgrus.inplace.service.AuthService
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class AuthController(
        private val authService: AuthService
) {

    @PostMapping("/user/sign-in")
    fun signIn(@RequestBody request: SignInRequest): TokenResponse {
        return authService.signIn(request)
    }

    @PostMapping("/user")
    fun signUp(@RequestBody request: SignUpRequest) {
        authService.signUp(request)
    }

    @PatchMapping("/user/active")
    fun updateUserActive(@RequestParam c: String) {
        authService.userActive()
    }

}