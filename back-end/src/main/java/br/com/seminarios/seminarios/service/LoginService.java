package br.com.seminarios.seminarios.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.seminarios.seminarios.dto.LoginDTO;
import br.com.seminarios.seminarios.exceptions.LoginNaoAutorizadoException;
import br.com.seminarios.seminarios.model.Login;
import br.com.seminarios.seminarios.repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	private LoginRepository loginRepository;
	
	public boolean autenticar(LoginDTO loginDTO) {
		try {
			Optional<Login> loginResponse = loginRepository.findByEmail(loginDTO.getEmail(), loginDTO.getSenha());
			
			if(loginResponse.isEmpty()) {
				throw new LoginNaoAutorizadoException();
			}
			
			return true;
			
		} catch(Exception e) {
			throw new LoginNaoAutorizadoException();
		}
	}
}
