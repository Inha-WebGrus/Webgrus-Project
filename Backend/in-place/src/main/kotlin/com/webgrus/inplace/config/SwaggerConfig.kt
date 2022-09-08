package com.webgrus.inplace.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.service.ApiKey
import springfox.documentation.service.AuthorizationScope
import springfox.documentation.service.SecurityReference
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spi.service.contexts.SecurityContext
import springfox.documentation.spring.web.plugins.Docket

@Configuration
class SwaggerConfig : WebMvcConfigurationSupport() {

    @Bean
    fun api(): Docket {
        return Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.webgrus.inplace.controller"))
                .paths(PathSelectors.any())
                .build()
        // TODO 테스트 이후 주석 해제
//                .securityContexts(listOf(securityContext()))
//                .securitySchemes(listOf(apiKey()))
    }

    fun apiKey(): ApiKey {
        return ApiKey("Authorization", "Authorization", "header")
    }

    fun securityContext(): SecurityContext {
        return SecurityContext.builder()
                .securityReferences(defaultAuth())
                .build()
    }

    fun defaultAuth(): List<SecurityReference> {
        val authorizationScope = AuthorizationScope("global", "accessEveryThing")
        val authorizationScopes = arrayOf(authorizationScope)
        return listOf(SecurityReference("Authorization", authorizationScopes))
    }

    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/swagger-ui/**").addResourceLocations("classpath:/META-INF/resources/webjars/springfox-swagger-ui/");
        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/springfox-swagger-ui/");
    }

}