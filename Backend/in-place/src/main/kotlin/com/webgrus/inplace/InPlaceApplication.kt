package com.webgrus.inplace

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class InPlaceApplication

fun main(args: Array<String>) {
    runApplication<InPlaceApplication>(*args)
}
