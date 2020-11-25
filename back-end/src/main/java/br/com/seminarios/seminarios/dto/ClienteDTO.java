package br.com.seminarios.seminarios.dto;

import br.com.seminarios.seminarios.model.Cliente;

public class ClienteDTO {
	
	private String cpfcnpj;
	private String nome;
	private String email;
	
	public ClienteDTO(Cliente cliente) {
		this.cpfcnpj = cliente.getCpfcnpj();
		this.nome = cliente.getNome();
		this.email = cliente.getLogin().getEmail();
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpfcnpj() {
		return cpfcnpj;
	}

	public void setCpfcnpj(String cpfcnpj) {
		this.cpfcnpj = cpfcnpj;
	}
}
