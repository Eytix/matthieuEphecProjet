package be.ephec.pdw.springboot.formation;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public record Formation(UUID id,
                        String title,
                        String description,
                        String location,
                        LocalDate date,
                        List<String> tags) {
}
