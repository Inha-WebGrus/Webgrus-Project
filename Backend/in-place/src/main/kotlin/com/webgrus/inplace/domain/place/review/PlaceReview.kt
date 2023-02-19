package com.webgrus.inplace.domain.place.review

import com.webgrus.inplace.domain.place.Place
import java.time.LocalDateTime
import javax.persistence.*

@Entity
class PlaceReview(

        val description: String,

        val star: Double,

        val createAt: LocalDateTime,

        val updateAt: LocalDateTime? = null,

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "place_id")
        val place: Place,

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long? = null,

) {
}