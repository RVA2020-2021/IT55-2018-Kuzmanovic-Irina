package rva.repository;

import java.math.BigDecimal;
import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rva.jpa.Proizvod;
import rva.jpa.StavkaRacuna;

public interface StavkaRacunaRepository extends JpaRepository<StavkaRacuna, Integer> {

	Collection<StavkaRacuna> findByProizvod(Proizvod p);
	Collection<StavkaRacuna> findByCenaLessThanOrderById(BigDecimal cena);
	
	@Query(value = "select coalesce(max(redni_broj)+1, 1) from stavka_racuna where proizvod = ?1", nativeQuery=true)
	Integer nextRBr(Integer proizvodId);
}
