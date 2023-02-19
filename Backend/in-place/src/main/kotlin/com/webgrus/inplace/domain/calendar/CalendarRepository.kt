package com.webgrus.inplace.domain.calendar

import org.springframework.data.jpa.repository.JpaRepository

interface CalendarRepository : JpaRepository<Calendar, Long> {
}