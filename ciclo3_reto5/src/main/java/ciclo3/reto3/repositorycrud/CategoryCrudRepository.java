/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package ciclo3.reto3.repositorycrud;

import ciclo3.reto3.model.Category;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author julia
 */
public interface CategoryCrudRepository extends CrudRepository<Category,Integer>{

    public Category deleteById(int id);

}
