package be.ephec.pdw.springboot.config;

import be.ephec.pdw.springboot.formation.FormationRepository;
import be.ephec.pdw.springboot.formation.InMemoryFormationRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig {

    @Bean
    public FormationRepository formationRepository() {
        return new InMemoryFormationRepository();
    }
}
