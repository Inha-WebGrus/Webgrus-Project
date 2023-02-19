package com.webgrus.inplace.controller

import com.webgrus.inplace.domain.place.Place
import com.webgrus.inplace.service.PlaceService
import io.swagger.annotations.Api
import org.springframework.data.domain.Page
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@Api(description = "맛집 API")
@RestController
class PlaceController(
        private val placeService: PlaceService,
) {

    @GetMapping("/places")
    fun getPlaces(): List<Place> {
        return placeService.getPlaces()
    }

    @GetMapping("/places/{placeId}")
    fun getPlace(
            @PathVariable placeId: Long
    ): Place {
        return placeService.getPlace(placeId)
    }

}