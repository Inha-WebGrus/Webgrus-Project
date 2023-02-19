package com.webgrus.inplace.domain.place

import java.time.LocalDate
import java.time.LocalDateTime
import javax.persistence.*

@Entity
class Place(

        var name: String,

        var address: String,

        @Enumerated(value = EnumType.STRING)
        val category: PlaceCategory,

        val createAt: LocalDateTime,

        val updateAt: LocalDateTime? = null,

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long? = null

) {
}