package com.webgrus.inplace.config.security

import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jws
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.security.core.Authentication
import org.springframework.stereotype.Component
import java.sql.Timestamp
import java.time.LocalDateTime

@Component
class TokenProvider {

    fun createToken(authentication: Authentication): String {
        val user = authentication.principal as UserPrincipal

        val nowDateTime = LocalDateTime.now()
        val expireDateTime = nowDateTime.plusDays(30)

        return Jwts.builder()
                .setSubject(user.id.toString())
                .setIssuedAt(Timestamp.valueOf(nowDateTime))
                .setExpiration(Timestamp.valueOf(expireDateTime))
                .signWith(SignatureAlgorithm.HS512, "secretKey")
                .compact()
    }

    fun validateToken(token: String): Boolean {
        try {
            getClaims(token)
            return true
        } catch (e: Exception) {

        }

        return false
    }

    fun getClaims(token: String): Jws<Claims> {
        return Jwts.parser()
                .setSigningKey("secretKey")
                .parseClaimsJws(token)
    }

    fun getUserIdFromToken(token: String): Long {
        return getClaims(token).body.subject.toLong()
    }

}