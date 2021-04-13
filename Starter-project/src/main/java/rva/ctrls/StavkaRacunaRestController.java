package rva.ctrls;

import java.math.BigDecimal;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Proizvod;
import rva.jpa.StavkaRacuna;
import rva.repository.ProizvodRepository;
import rva.repository.StavkaRacunaRepository;

@CrossOrigin
@RestController
@Api(tags= {"Stavka racuna CRUD operacije"})
public class StavkaRacunaRestController {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private StavkaRacunaRepository stavkaRacunaRepository;
	
	@Autowired
	private ProizvodRepository proizvodRepository;
	
	@GetMapping("stavkaRacuna")
	@ApiOperation(value="Vraca kolekciju svih stavki racuna iz baze podataka")
	public Collection<StavkaRacuna> getStavkeRacuna(){
		return stavkaRacunaRepository.findAll();
	}
	
	@GetMapping("stavkaRacuna/{id}")
	@ApiOperation(value="Vraca stavku racuna iz baze podataka ciji je id vrednost prosledjena kao path varijabla")
	public StavkaRacuna getStavkaRacuna(@PathVariable("id") Integer id) {
		return stavkaRacunaRepository.getOne(id);
	}
	
	@GetMapping("stavkeZaRacuneId/{id}")
	@ApiOperation(value="Vraca stavke po racuna iz baze podataka ciji je id vrednost prosledjena kao path varijabla")
	public Collection<StavkaRacuna> stavkePoRacunuId(@PathVariable("id") Integer id){
		Proizvod p=proizvodRepository.getOne(id);
		return stavkaRacunaRepository.findByProizvod(p);
	}
	
	@GetMapping("stavkaRacunaCena/{cena}")
	@ApiOperation(value="Vraca kolekciju svih cena iz baze podataka koji u nazivu sadrze BigDecimal prosledjen kao path varijabla")
	public Collection<StavkaRacuna> stavkeRacunacena(@PathVariable("cena") BigDecimal cena){
		return stavkaRacunaRepository.findByCenaLessThanOrderById(cena);
	}
	
	@PostMapping("stavkaRacuna")
	@ApiOperation(value="Upisuje stavku racuna u bazu podataka")
	public ResponseEntity<StavkaRacuna> insertStavkaRacuna(@RequestBody StavkaRacuna stavkaRacuna){
		if(!stavkaRacunaRepository.existsById(stavkaRacuna.getId())) {
			stavkaRacuna.setRedniBroj(stavkaRacunaRepository.nextRBr(stavkaRacuna.getProizvod().getId()));
			stavkaRacunaRepository.save(stavkaRacuna);
			return new ResponseEntity<StavkaRacuna>(HttpStatus.OK);
		}
		return new ResponseEntity<StavkaRacuna>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("stavkaRacuna")
	@ApiOperation(value="Modifikuje postojecu stavku racuna u bazu podataka")
	public ResponseEntity<StavkaRacuna> updateStavkaRacuna(@RequestBody StavkaRacuna stavkaRacuna){
		if(!stavkaRacunaRepository.existsById(stavkaRacuna.getId())) {
			return new ResponseEntity<StavkaRacuna>(HttpStatus.NO_CONTENT);
		}
		stavkaRacunaRepository.save(stavkaRacuna);
		return new ResponseEntity<StavkaRacuna>(HttpStatus.OK);
	}
	
	@DeleteMapping("stavkaRacuna/{id}")
	@ApiOperation(value="Brise stavku racuna iz baze podataka ciji je id vrednost prosledjena kao path varijabla")
	public ResponseEntity<StavkaRacuna> deleteStavkaRacuna(@PathVariable("id") Integer id){
		if(!stavkaRacunaRepository.existsById(id)) {
			return new ResponseEntity<StavkaRacuna>(HttpStatus.NO_CONTENT);
		}
		stavkaRacunaRepository.deleteById(id);
		if(id == -100) {
			jdbcTemplate.execute(
					"INSERT INTO \"stavka_racuna\"(\"id\", \"redni_broj\", \"kolicina\", \"jedinica_mere\", \"cena\", \"racun\", \"proizvod\") "
					+ "VALUES (-100, 30, 15, 'komad', 100, 1, 1)"
					);
		}
		return new ResponseEntity<StavkaRacuna>(HttpStatus.OK);
	}
	
}
