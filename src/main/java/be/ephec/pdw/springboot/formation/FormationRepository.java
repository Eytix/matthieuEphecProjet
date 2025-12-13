package be.ephec.pdw.springboot.formation;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface FormationRepository {
    List<Formation> findAll();

    Optional<Formation> findById(UUID id);

    void addFormation(Formation formation);

    void deleteFormation(UUID id);
}
