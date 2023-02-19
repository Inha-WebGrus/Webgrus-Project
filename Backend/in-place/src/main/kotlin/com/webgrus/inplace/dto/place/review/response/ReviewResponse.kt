package com.webgrus.inplace.dto.place.review.response

import com.webgrus.inplace.domain.place.review.PlaceReview
import java.time.LocalDateTime

data class ReviewResponse(
        val id: Long,
        val description: String,
        val star: Double,
        val createAt: LocalDateTime
) {
    companion object {
        @JvmStatic
        fun of(placeReview: PlaceReview): ReviewResponse {
            return ReviewResponse(
                    id = placeReview.id!!,
                    description = placeReview.description,
                    star = placeReview.star,
                    createAt = placeReview.createAt,
            )
        }
    }

}
