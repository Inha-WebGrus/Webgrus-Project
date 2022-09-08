package com.webgrus.inplace.service

import com.webgrus.inplace.config.security.TokenProvider
import com.webgrus.inplace.domain.user.User
import com.webgrus.inplace.domain.user.UserRepository
import com.webgrus.inplace.domain.user.UserStatus
import com.webgrus.inplace.domain.user.verify.UserVerify
import com.webgrus.inplace.domain.user.verify.UserVerifyRepository
import com.webgrus.inplace.dto.auth.request.SignInRequest
import com.webgrus.inplace.dto.auth.request.SignUpRequest
import com.webgrus.inplace.dto.auth.response.TokenResponse
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime
import java.util.UUID

@Service
class AuthService(
        private val mailService: MailService,
        private val userRepository: UserRepository,
        private val userVerifyRepository: UserVerifyRepository,
        private val tokenProvider: TokenProvider,
        private val passwordEncoder: PasswordEncoder,
        private val authenticationManager: AuthenticationManager,
) {

    fun signIn(request: SignInRequest): TokenResponse {
        val authentication: Authentication = authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(
                        request.email,
                        request.password
                )
        )

        SecurityContextHolder.getContext().authentication = authentication

        return TokenResponse(token = tokenProvider.createToken(authentication))
    }

    @Transactional
    fun signUp(request: SignUpRequest) {
        if (userRepository.findByEmail(request.email) != null)
            throw IllegalArgumentException()

        userRepository.save(
                User(
                        email = request.email,
                        password = passwordEncoder.encode(request.password),
                        nickname = request.nickname,
                        status = UserStatus.INACTIVE,
                        createAt = LocalDateTime.now()
                )
        )

        val userVerify = userVerifyRepository.save(
                UserVerify(
                        email = request.email,
                        authCode = UUID.randomUUID().toString()
                )
        )

        // TODO 개선 필요
        mailService.sendMail(userVerify.email, "인플레이스 가입 인증 메일 이에요.", userVerify.authCode)
    }

    @Transactional
    fun userActive() {
        val userVerify = userVerifyRepository.findByAuthCode("") ?: throw IllegalArgumentException("")

        if (userVerify.status) {
            throw IllegalArgumentException("")
        }

        val user = userRepository.findByEmail(userVerify.email) ?: throw IllegalArgumentException("")

        if (user.status == UserStatus.ACTIVE) {
            throw IllegalArgumentException("")
        }

        userVerify.active()
        user.active()
    }

}