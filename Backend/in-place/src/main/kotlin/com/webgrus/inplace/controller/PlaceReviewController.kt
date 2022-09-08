package com.webgrus.inplace.controller

import com.webgrus.inplace.dto.place.review.request.ReviewCreateRequest
import io.swagger.annotations.Api
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.core.annotation.CurrentSecurityContext
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RestController
import springfox.documentation.annotations.ApiIgnore

@Api(description = "맛집 리뷰 API")
@RestController
class PlaceReviewController {

    @GetMapping("/place/{placeId}/review")
    fun getReviews(
            @PathVariable placeId: Long
    ) {

    }

    @GetMapping("/place/{placeId}/review/latest")
    fun getLatestReview(
            @PathVariable placeId: Long
    ) {

    }

    @PostMapping("/place/{placeId}/review")
    fun postReview(
            @PathVariable placeId: Long,
            @RequestBody request: ReviewCreateRequest,
            @RequestHeader authorization: String,
            @ApiIgnore @AuthenticationPrincipal user: UserDetails
    ) {

    }

}