package com.webgrus.inplace.dto.auth.response

data class TokenResponse(
        val tokenType: String = "Bearer",
        val token: String,
)