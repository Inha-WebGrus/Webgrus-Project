package com.webgrus.inplace.controller

import io.swagger.annotations.Api
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@Api(description = "맛집 API")
@RestController
class PlaceController {

    @GetMapping("/place")
    fun getPlaces() {

    }

    @GetMapping("/place/{placeId}")
    fun getPlace(
            @PathVariable placeId: Long
    ) {

    }

}