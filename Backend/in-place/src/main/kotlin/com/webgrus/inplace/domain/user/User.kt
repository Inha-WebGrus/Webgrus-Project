package com.webgrus.inplace.domain.user

import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class User(
        val email: String,

        var nickname: String,

        var password: String,

        var lastLoginAt: LocalDateTime? = null,

        val createAt: LocalDateTime,

        var updateAt: LocalDateTime? = null,

        var status: UserStatus,

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long? = null
) {

    fun active() {
        this.status = UserStatus.ACTIVE
    }

}