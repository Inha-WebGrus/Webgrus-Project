package com.webgrus.inplace.dto.auth.request

data class SignUpRequest(
        val email: String,
        val nickname: String,
        val password: String,
        val confirmPassword: String
)