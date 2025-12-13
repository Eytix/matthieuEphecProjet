package be.ephec.pdw.springboot.formation;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class DataBaseFormationRepository implements FormationRepository {
    @Override
    public List<Formation> findAll() {
        return List.of();
    }

    @Override
    public Optional<Formation> findById(UUID id) {
        return Optional.empty();
    }

    @Override
    public void addFormation(Formation formation) {

    }

    @Override
    public void deleteFormation(UUID id) {

    }
}
