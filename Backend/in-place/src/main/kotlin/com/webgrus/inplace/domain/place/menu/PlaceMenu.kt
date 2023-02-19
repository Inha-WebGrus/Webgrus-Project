package com.webgrus.inplace.domain.place.menu

import com.webgrus.inplace.domain.place.Place
import javax.persistence.*

@Entity
class PlaceMenu(



        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "place_id")
        val place: Place,

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long? = null
) {
}