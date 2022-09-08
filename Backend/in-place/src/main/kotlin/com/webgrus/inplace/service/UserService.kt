package com.webgrus.inplace.service

import com.webgrus.inplace.config.security.UserPrincipal
import com.webgrus.inplace.domain.user.UserRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class UserService(
        private val userRepository: UserRepository,
) : UserDetailsService {

    override fun loadUserByUsername(username: String): UserDetails {
        val user = userRepository.findByEmail(username) ?: throw IllegalArgumentException()

        return UserPrincipal(
                id = user.id!!,
                email = user.email,
                pw = user.password,
                authority = mutableListOf(SimpleGrantedAuthority("ROLE_USER"))
        )
    }

    fun loadUserById(id: Long): UserDetails {
        val user = userRepository.findByIdOrNull(id) ?: throw IllegalArgumentException()

        return UserPrincipal(
                id = user.id!!,
                email = user.email,
                pw = user.password,
                authority = mutableListOf(SimpleGrantedAuthority("ROLE_USER"))
        )
    }

}