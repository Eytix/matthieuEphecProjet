package be.ephec.pdw.springboot.formation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class FormationService {


    private final FormationRepository formationRepository;

    public List<Formation> findAll(){
        return formationRepository.findAll();
    }

    public Optional<Formation> findById(UUID id){
        return formationRepository.findById(id);
    }

    public void addFormation(Formation formation){
        formationRepository.addFormation(formation);
    }

    public void deleteFormation(UUID id){
        formationRepository.deleteFormation(id);
    }
}
