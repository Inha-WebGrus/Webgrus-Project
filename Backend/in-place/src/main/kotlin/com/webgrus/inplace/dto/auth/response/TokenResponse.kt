package com.webgrus.inplace.dto.auth.response

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel("로그인 응답")
data class TokenResponse(
        @ApiModelProperty(value = "토큰 type")
        val tokenType: String = "Bearer",

        @ApiModelProperty(value = "토큰")
        val token: String,
)