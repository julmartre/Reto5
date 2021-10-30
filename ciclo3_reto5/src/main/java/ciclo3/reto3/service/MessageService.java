/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ciclo3.reto3.service;

import ciclo3.reto3.model.Message;
import ciclo3.reto3.repository.MessageRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author julia
 */

@Service
public class MessageService {
        @Autowired
    private MessageRepository MessageRepository;
    
    public List<Message> getAll(){
        return MessageRepository.getAll();
    }

    public Optional<Message> getMessage(int id){
        return MessageRepository.getMessage(id);
    }

    public Message save(Message m){
        if(m.getIdMessage()==null){
            return MessageRepository.save(m);
        }else{
            Optional<Message> maux=MessageRepository.getMessage(m.getIdMessage());
            if(maux.isEmpty()){
                return MessageRepository.save(m);
            }else{
                return m;
            }
        }
    }

    public Message update(Message m){
        if (m.getIdMessage()!=null){
            Optional<Message> maux=MessageRepository.getMessage(m.getIdMessage());
            if(!maux.isEmpty()){
                if(m.getMessageText()!=null){
                    maux.get().setMessageText(m.getMessageText());
                }
            return MessageRepository.save(maux.get());
            }
        }
    return m;
    }  
    
    public Message delete(int id){
    return MessageRepository.delete(id);
    }  
    
}
