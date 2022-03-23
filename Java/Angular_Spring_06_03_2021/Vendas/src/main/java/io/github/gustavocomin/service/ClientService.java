package io.github.gustavocomin.service;

import io.github.gustavocomin.model.Cliente;
import io.github.gustavocomin.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    private ClientRepository repository;

    @Autowired
    public ClientService(ClientRepository repository){
        this.repository = repository;
    }

    public void salvarCliente(Cliente cliente){
        validarCliente(cliente);
        this.repository.persist(cliente);
    }

    public void validarCliente(Cliente cliente){

    }
}
