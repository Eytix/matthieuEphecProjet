package be.ephec.pdw.springboot.formation;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/formations")
public class FormationController {

    private final FormationService formationService = new FormationService();

    @GetMapping(produces = "application/json")
    public List<Formation> formations() {
        return formationService.findAll();
    }

    @GetMapping(path = "/{id}", produces = "application/json")
    public ResponseEntity<Formation> formation(@PathVariable(name = "id") UUID id) {
        return ResponseEntity.of(formationService.findById(id));
    }

    @PostMapping(consumes = "application/json")
    public void addFormation(@RequestBody Formation formation) {
        formationService.addFormation(formation);
    }

    @DeleteMapping("/{id}")
    public void deleteFormation(@PathVariable(name = "id") UUID id) {
        formationService.deleteFormation(id);
    }

}
