package be.ephec.pdw.springboot.formation;

import java.text.Normalizer;
import java.time.LocalDate;
import java.time.Month;
import java.util.*;

public class FormationService {

    private static final Set<Formation> FORMATIONS;

    static {
        FORMATIONS = new HashSet<>();
        FORMATIONS.add(new Formation(UUID.fromString("be1ee3a0-898b-433b-ae1f-b3f2ce97bc54"),
                "Angular - premiers pas",
                "Fais tes premiers pas avec Angular",
                "EPHEC",
                LocalDate.of(2026, Month.OCTOBER, 20),
                List.of("Angular", "TypeScript"),
                20,
                0,
                LocalDate.of(2025, Month.JANUARY, 10),
                LocalDate.of(2025, Month.DECEMBER, 25),
                0,
                20
        ));
        FORMATIONS.add(new Formation(UUID.fromString("a070c1bf-bb9d-43b3-ba92-fa55442e3e60"),
                "Java - Springboot",
                "Découvrez Springboot",
                "Remote",
                LocalDate.of(2026, Month.JANUARY, 20),
                List.of("Java", "Springboot"),
                10,
                50,
                LocalDate.of(2026, Month.JANUARY, 20),
                LocalDate.of(2026, Month.JANUARY, 20),
                3,
                8
        ));
        FORMATIONS.add(new Formation(UUID.fromString("94ae1c95-4d9a-4c4f-b21a-c96406a3b848"),
                "Git",
                "Plongez dans Git",
                "Remote",
                LocalDate.of(2026, Month.JANUARY, 5),
                List.of("Git", "Gud"),
                5,
                0,
                LocalDate.of(2026, Month.JANUARY, 5),
                LocalDate.of(2026, Month.JANUARY, 5),
                14,
                15
        ));
    }

    public List<Formation> findAll(){
        return new ArrayList<>(FORMATIONS);
    }

    public Optional<Formation> findById(UUID id){
        return FORMATIONS.stream().filter(f -> f.id().equals(id)).findFirst();
    }

    public void addFormation(Formation formation){
        FORMATIONS.add(formation);
    }

    public void deleteFormation(UUID id){
        FORMATIONS.removeIf(f -> f.id().equals(id));
    }
}
