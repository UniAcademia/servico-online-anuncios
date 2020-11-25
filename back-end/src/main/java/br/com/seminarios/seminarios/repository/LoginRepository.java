package br.com.seminarios.seminarios.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.seminarios.seminarios.model.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {

	@Query("SELECT l FROM Login l WHERE l.email = :email AND l.senha = :senha")
	Optional<Login> findByEmail(@Param("email") String email, @Param("senha") String senha);
}