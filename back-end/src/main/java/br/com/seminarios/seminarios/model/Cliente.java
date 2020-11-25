package br.com.seminarios.seminarios.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import br.com.seminarios.seminarios.dto.ClienteDTO;

@Entity
@Table(name = "cliente")
public class Cliente {
	
	@Id
	@Column(name = "id")
	private Integer id;
	
	@OneToOne
	@JoinColumn(name = "id_login")
	private Login login;
	
	@Column(name = "cpfcnpj")
	private String cpfcnpj;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "data_cadastro")
	private Date dataCadastro;
	
	public void loadDataFromDTO(ClienteDTO clienteDTO) {
		
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getCpfcnpj() {
		return cpfcnpj;
	}
	public void setCpfcnpj(String cpfcnpj) {
		this.cpfcnpj = cpfcnpj;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public Date getDataCadastro() {
		return dataCadastro;
	}
	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}
}
