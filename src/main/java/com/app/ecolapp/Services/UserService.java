package com.app.ecolapp.Services;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.app.ecolapp.Models.UserModel;
import com.app.ecolapp.Models.Response.GenericResponse;
import com.app.ecolapp.Repositories.IUserRepository;

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;

    public GenericResponse<ArrayList<UserModel>> getUsers (){

        try {
            var list = (ArrayList<UserModel>) userRepository.findAll();
            return new GenericResponse<ArrayList<UserModel>>(HttpStatus.OK, "OK", true, list);

        } catch (Exception exception) {
            return new GenericResponse<ArrayList<UserModel>>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(),
                    false, null);
        }
    }

    public GenericResponse<UserModel> saveUser(UserModel user){
        try {
            return new GenericResponse<UserModel>(HttpStatus.OK, "OK", true, userRepository.save(user));

        } catch (Exception exception) {
            return new GenericResponse<UserModel>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(),
                    false, null);
        }
    }

    public GenericResponse<Optional<UserModel>> getById(Long id){
   
        
        try {
            return new GenericResponse<Optional<UserModel>>(HttpStatus.OK, "OK", true, userRepository.findById(id));

        } catch (Exception exception) {
            return new GenericResponse<Optional<UserModel>>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(),
                    false, null);
        }
    }

    public GenericResponse<Integer> getPoints(Long id){
        try {
            UserModel user = userRepository.findById(id).get();
            Integer points = user.getPoints();
            return new GenericResponse<Integer>(HttpStatus.OK, "OK", true, points);

        } catch (Exception exception) {
            return new GenericResponse<Integer>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(),
                    false, null);
        }
    }


}
