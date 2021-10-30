/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ciclo3.reto3.repository;

import ciclo3.reto3.model.Room;
import ciclo3.reto3.repositorycrud.RoomCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author julia
 */

@Repository
public class RoomRepository {
    @Autowired
    private RoomCrudRepository RoomCrudRepository;
    
        public List<Room> getAll(){
        return (List<Room>) RoomCrudRepository.findAll();
    }
    public Optional<Room> getRoom(int id){
        return  RoomCrudRepository.findById(id);
    }

    public Room save(Room r){
        return RoomCrudRepository.save(r);
    }
    
    public Room update(Room r){
        return RoomCrudRepository.save(r);
    }
    
    public Room delete(int id){
        return RoomCrudRepository.deleteById(id);
    }   

}
