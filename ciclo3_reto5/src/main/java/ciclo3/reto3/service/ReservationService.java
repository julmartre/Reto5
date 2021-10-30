/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ciclo3.reto3.service;

import ciclo3.reto3.model.Reservation;
import ciclo3.reto3.model.custom.CountClient;
import ciclo3.reto3.model.custom.StatusAmount;
import ciclo3.reto3.repository.ReservationRepository;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.text.ParseException;
import java.util.ArrayList;

/**
 *
 * @author julia
 */

@Service
public class ReservationService {
    
    @Autowired
    private ReservationRepository ReservationRepository;
    
    public List<Reservation> getAll(){
        return ReservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id){
        return ReservationRepository.getReservation(id);
    }

    public Reservation save(Reservation r){
        if(r.getIdReservation()==null){
            return ReservationRepository.save(r);
        }else{
            Optional<Reservation> raux=ReservationRepository.getReservation(r.getIdReservation());
            if(raux.isEmpty()){
                return ReservationRepository.save(r);
            }else{
                return r;
            }
        }
    }

    public Reservation update(Reservation r){
        if (r.getIdReservation()!=null){
            Optional<Reservation> raux=ReservationRepository.getReservation(r.getIdReservation());
            if(!raux.isEmpty()){
                if(r.getStartDate()!=null){
                    raux.get().setStartDate(r.getStartDate());
                }
                if(r.getDevolutionDate()!=null){
                    raux.get().setDevolutionDate(r.getDevolutionDate());
                }
                if(r.getStatus()!=null){
                    raux.get().setStatus(r.getStatus());
                }
            return ReservationRepository.save(raux.get());
            }
        }
    return r;
    }  
    
    public Reservation delete(int id){
    return ReservationRepository.delete(id);
    }
    
    public List<CountClient> getTopClients(){
        return ReservationRepository.getTopClients();
    }
    
    public StatusAmount getStatusReport(){
        List<Reservation> completed=ReservationRepository.getReservationByStatus("completed");
        List<Reservation> cancelled=ReservationRepository.getReservationByStatus("cancelled");

        StatusAmount descAmt=new StatusAmount(completed.size(),cancelled.size());
        return descAmt;
    }
    
    public List<Reservation> getReservationPeriod(String d1, String d2){

        SimpleDateFormat parser=new SimpleDateFormat("yyyy-MM-dd");
        Date dateOne=new Date();
        Date dateTwo=new Date();
        try {
            dateOne=parser.parse(d1);
            dateTwo=parser.parse(d2);
        }catch (ParseException e) {
            e.printStackTrace();
        }
        if(dateOne.before(dateTwo)){
            return ReservationRepository.getReservationPeriod(dateOne,dateTwo);
        }else{
            return new ArrayList<>();
        }
    }
    
}
