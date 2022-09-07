package com.webgrus.inplace.config.security

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

data class UserPrincipal(

        val id: Long,

        val email: String,

        val pw: String,

        val authority: MutableCollection<out GrantedAuthority>

): UserDetails {

    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        return authority
    }

    override fun getPassword(): String {
        return pw
    }

    override fun getUsername(): String {
        return email
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }

}
