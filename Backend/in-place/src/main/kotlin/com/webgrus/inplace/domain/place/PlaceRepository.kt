package com.webgrus.inplace.domain.place

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PlaceRepository: JpaRepository<Place, Long> {

}