package br.com.seminarios.seminarios.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.seminarios.seminarios.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

	@Query("SELECT c FROM Cliente c WHERE c.login.email = :email")
	Optional<Cliente> findByEmail(@Param("email") String email);
	
}
