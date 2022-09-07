package com.webgrus.inplace.domain.user.verify

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserVerifyRepository : JpaRepository<UserVerify, Long> {

    fun findByAuthCode(authCode: String): UserVerify?

}