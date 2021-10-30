/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ciclo3.reto3.repository;

import ciclo3.reto3.model.Client;
import ciclo3.reto3.model.Reservation;
import ciclo3.reto3.model.custom.CountClient;
import ciclo3.reto3.repositorycrud.ReservationCrudRepository;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author julia
 */

@Repository
public class ReservationRepository {
        @Autowired
    private ReservationCrudRepository ReservationCrudRepository;
    
        public List<Reservation> getAll(){
        return (List<Reservation>) ReservationCrudRepository.findAll();
    }
    public Optional<Reservation> getReservation(int id){
        return  ReservationCrudRepository.findById(id);
    }

    public Reservation save(Reservation r){
        return ReservationCrudRepository.save(r);
    }

    public Reservation update(Reservation r){
        return ReservationCrudRepository.save(r);
    }
    
    public Reservation delete(int id){
        return ReservationCrudRepository.deleteById(id);
    }
    
        public List<Reservation> getReservationByStatus(String state){
        return ReservationCrudRepository.findAllByStatus(state);
    }

    public List<Reservation> getReservationPeriod(Date dateOne, Date dateTwo){
        return ReservationCrudRepository.findAllByStartDateAfterAndStartDateBefore(dateOne, dateTwo);
    }

    public List<CountClient> getTopClients(){
        List<CountClient> res=new ArrayList<>();

        List<Object[]> report=ReservationCrudRepository.countTotalReservationByClient();
        for(int i=0;i<report.size();i++){
            /*
            Client c=(Client) report.get(i)[0];
            Long cantidad=(Long) report.get(i)[1];
            CountClient cc=new CountClient(cantidad,c);
            res.add(cc);
            */
            res.add(new CountClient((Long) report.get(i)[1],(Client)report.get(i)[0] ));
        }
        return res;
    }
}
