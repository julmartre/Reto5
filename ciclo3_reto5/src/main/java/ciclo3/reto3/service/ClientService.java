/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ciclo3.reto3.service;

import ciclo3.reto3.model.Client;
import ciclo3.reto3.repository.ClientRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author julia
 */

@Service
public class ClientService {
    @Autowired
    private ClientRepository ClientRepository;
    
    public List<Client> getAll(){
        return ClientRepository.getAll();
    }

    public Optional<Client> getClient(int id){
        return ClientRepository.getClient(id);
    }

    public Client save(Client c){
        if(c.getIdClient()==null){
            return ClientRepository.save(c);
        }else{
            Optional<Client> caux=ClientRepository.getClient(c.getIdClient());
            if(caux.isEmpty()){
                return ClientRepository.save(c);
            }else{
                return ClientRepository.save(c);
            }
        }
    }
    
    public Client update(Client c){
        if (c.getIdClient()!=null){
            Optional<Client> caux=ClientRepository.getClient(c.getIdClient());
            if(!caux.isEmpty()){
                if(c.getEmail()!=null){
                    caux.get().setEmail(c.getEmail());
                }
                if(c.getPassword()!=null){
                    caux.get().setPassword(c.getPassword());
                }
                if(c.getName()!=null){
                    caux.get().setName(c.getName());
                }
                if(c.getAge()!=null){
                    caux.get().setAge(c.getAge());
                }
            return ClientRepository.save(caux.get());
            }
        }
    return c;
    }      
    
     public Client delete(int id){
     return ClientRepository.delete(id);
    }  
    
}
