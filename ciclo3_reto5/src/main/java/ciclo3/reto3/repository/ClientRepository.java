/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ciclo3.reto3.repository;

import ciclo3.reto3.model.Client;
import ciclo3.reto3.repositorycrud.ClientCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author julia
 */

@Repository
public class ClientRepository {
    
    @Autowired
    private ClientCrudRepository ClientCrudRepository;
    
        public List<Client> getAll(){
        return (List<Client>) ClientCrudRepository.findAll();
    }
    public Optional<Client> getClient(int id){
        return  ClientCrudRepository.findById(id);
    }

    public Client save(Client c){
        return ClientCrudRepository.save(c);
    }
    public Client delete(int id){
        return ClientCrudRepository.deleteById(id);
    }    
    
}
