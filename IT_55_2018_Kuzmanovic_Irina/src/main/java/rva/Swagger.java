package rva;


import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Configuration
public class Swagger {

	public static final Contact DEFAULT_CONTACT=new Contact("Irina Kuzmanovic",
			"https://github.com/RVA2020-2021/IT55-2018-Kuzmanovic-Irina","kuzmanovic.irina@uns.ac.rs");
	

public static final ApiInfo DEFAULT_API_INFO=new ApiInfo("Backend RVA Swagger",
		      "Razvoj viseslojnih aplikacija", "1.0","", DEFAULT_CONTACT,"","",
		      new ArrayList<VendorExtension>());

@Bean
Docket api() {
	return new Docket(DocumentationType.SWAGGER_2).select().
			apis(RequestHandlerSelectors.basePackage("rva")).build().apiInfo(DEFAULT_API_INFO);
}
}


