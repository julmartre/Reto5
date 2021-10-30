/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ciclo3.reto3.repository;

import ciclo3.reto3.model.Category;
import ciclo3.reto3.repositorycrud.CategoryCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author julia
 */

@Repository
public class CategoryRepository {
    
    @Autowired
    private CategoryCrudRepository CategoryCrudRepository;
    
    public List<Category> getAll(){
        return (List<Category>) CategoryCrudRepository.findAll();
    }
    public Optional<Category> getCategory(int id){
        return  CategoryCrudRepository.findById(id);
    }

    public Category save(Category c){
        return CategoryCrudRepository.save(c);
    }
    
    public Category delete(int id){
        return CategoryCrudRepository.deleteById(id);
    }
}
