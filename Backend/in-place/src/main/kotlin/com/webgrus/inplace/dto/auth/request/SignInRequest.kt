package com.webgrus.inplace.dto.auth.request

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel("로그인 요청")
data class SignInRequest(
        @ApiModelProperty(value = "이메일", required = true)
        val email: String,

        @ApiModelProperty(value = "패스워드", required = true)
        val password: String,
)
