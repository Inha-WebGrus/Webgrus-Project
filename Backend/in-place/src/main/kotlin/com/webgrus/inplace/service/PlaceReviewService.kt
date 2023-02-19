package com.webgrus.inplace.service

import com.webgrus.inplace.domain.place.PlaceRepository
import com.webgrus.inplace.domain.place.review.PlaceReview
import com.webgrus.inplace.domain.place.review.PlaceReviewRepository
import com.webgrus.inplace.dto.place.review.request.ReviewCreateRequest
import com.webgrus.inplace.dto.place.review.response.ReviewResponse
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class PlaceReviewService(
        private val placeRepository: PlaceRepository,
        private val placeReviewRepository: PlaceReviewRepository,
) {

    fun getReviews(placeId: Long): List<ReviewResponse> {
        return placeReviewRepository.findByPlaceId(placeId)
                .map(ReviewResponse::of)
    }

    fun postReview(placeId: Long, request: ReviewCreateRequest) {
        val place = placeRepository.findByIdOrNull(placeId) ?: throw IllegalArgumentException("리뷰를 등록할 장소를 찾을 수 없습니다.")
        placeReviewRepository.save(
                PlaceReview(
                        description = request.description,
                        star = request.star,
                        createAt = LocalDateTime.now(),
                        place = place,
                )
        )
    }

}