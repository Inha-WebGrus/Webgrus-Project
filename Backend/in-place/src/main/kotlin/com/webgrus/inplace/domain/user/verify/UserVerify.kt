package com.webgrus.inplace.domain.user.verify

import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class UserVerify(

        val email: String,

        val authCode: String,

        var status: Boolean = false,

        val createAt: LocalDateTime = LocalDateTime.now(),

        val updateAt: LocalDateTime? = null,

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long? = null

) {

    fun active() {
        status = true
    }

}