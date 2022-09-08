package com.webgrus.inplace.config.security

import com.webgrus.inplace.service.UserService
import org.springframework.http.HttpHeaders
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.util.StringUtils
import org.springframework.web.filter.OncePerRequestFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class TokenAuthenticationFilter(
        private val userService: UserService,
        private val tokenProvider: TokenProvider,
) : OncePerRequestFilter() {

    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain) {
        val token = getTokenFromReqHeader(request)

        token?.let {
            tokenProvider.validateToken(token)

            val id = tokenProvider.getUserIdFromToken(token)

            val user = userService.loadUserById(id)

            val authenticationToken = UsernamePasswordAuthenticationToken(
                    user, null, user.authorities
            )

            SecurityContextHolder.getContext().authentication = authenticationToken
        }

        filterChain.doFilter(request, response)
    }

    fun getTokenFromReqHeader(request: HttpServletRequest): String? {
        val token: String? = request.getHeader(HttpHeaders.AUTHORIZATION)

        if (token != null) {
            if (token.isNotBlank() && StringUtils.startsWithIgnoreCase(token, "Bearer "))
                token.substring(7)
        }

        return null
    }

}