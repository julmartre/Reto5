/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ciclo3.reto3.repository;

import ciclo3.reto3.model.Message;
import ciclo3.reto3.repositorycrud.MessageCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author julia
 */

@Repository
public class MessageRepository {
    @Autowired
    private MessageCrudRepository MessageCrudRepository;
    
        public List<Message> getAll(){
        return (List<Message>) MessageCrudRepository.findAll();
    }
    public Optional<Message> getMessage(int id){
        return  MessageCrudRepository.findById(id);
    }

    public Message save(Message m){
        return MessageCrudRepository.save(m);
    }
    
    public Message update(Message m){
        return MessageCrudRepository.save(m);
    }
    
    public Message delete(int id){
        return MessageCrudRepository.deleteById(id);
    }   
    
}
