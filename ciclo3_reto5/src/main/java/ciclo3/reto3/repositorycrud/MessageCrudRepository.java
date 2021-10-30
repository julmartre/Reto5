/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package ciclo3.reto3.repositorycrud;

import ciclo3.reto3.model.Message;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author julia
 */
public interface MessageCrudRepository extends CrudRepository<Message,Integer>{
    public Message deleteById(int id);
}
