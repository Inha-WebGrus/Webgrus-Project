package com.webgrus.inplace.dto.auth.request

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel("회원가입 요청")
data class SignUpRequest(
        @ApiModelProperty(value = "이메일", required = true)
        val email: String,

        @ApiModelProperty(value = "닉네임", required = true)
        val nickname: String,

        @ApiModelProperty(value = "패스워드", required = true)
        val password: String,

        @ApiModelProperty(value = "패스워드 확인", required = true)
        val confirmPassword: String
)