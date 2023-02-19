package com.webgrus.inplace.domain.place.review

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PlaceReviewRepository: JpaRepository<PlaceReview, Long> {

    fun findByPlaceId(placeId: Long): List<PlaceReview>

}