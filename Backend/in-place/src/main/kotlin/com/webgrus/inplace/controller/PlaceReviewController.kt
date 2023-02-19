package com.webgrus.inplace.controller

import com.webgrus.inplace.dto.place.review.request.ReviewCreateRequest
import com.webgrus.inplace.dto.place.review.response.ReviewResponse
import com.webgrus.inplace.service.PlaceReviewService
import io.swagger.annotations.Api
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.*
import springfox.documentation.annotations.ApiIgnore

@Api(description = "맛집 리뷰 API")
@RestController
class PlaceReviewController(
        private val placeReviewService: PlaceReviewService
) {

    @GetMapping("/places/{placeId}/reviews")
    fun getReviews(
            @PathVariable placeId: Long
    ): List<ReviewResponse> {
        return placeReviewService.getReviews(placeId)
    }

    @GetMapping("/places/{placeId}/reviews/latest")
    fun getLatestReview(
            @PathVariable placeId: Long
    ) {
        // TODO
    }

    @PostMapping("/places/{placeId}/reviews")
    fun postReview(
            @PathVariable placeId: Long,
            @RequestBody request: ReviewCreateRequest,
            @RequestHeader authorization: String,
            @ApiIgnore @AuthenticationPrincipal user: UserDetails
    ) {
        placeReviewService.postReview(placeId, request)
    }

}