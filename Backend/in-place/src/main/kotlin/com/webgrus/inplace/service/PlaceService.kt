package com.webgrus.inplace.service

import com.webgrus.inplace.domain.place.Place
import com.webgrus.inplace.domain.place.PlaceRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class PlaceService(
        private val placeRepository: PlaceRepository,
) {

    @Transactional(readOnly = true)
    fun getPlaces(): MutableList<Place> {
        return placeRepository.findAll()
    }

    @Transactional(readOnly = true)
    fun getPlace(id: Long): Place {
        return placeRepository.findByIdOrNull(id) ?: throw IllegalArgumentException("장소를 찾을 수 없습니다.")
    }

}