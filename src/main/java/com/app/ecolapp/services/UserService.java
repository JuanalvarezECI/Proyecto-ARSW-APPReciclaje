package com.app.ecolapp.services;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.app.ecolapp.models.UserModel;
import com.app.ecolapp.models.response.GenericResponse;
import com.app.ecolapp.repositories.IUserRepository;

@Service
public class UserService {
    private final IUserRepository userRepository;
    public UserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

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
            Optional<UserModel> userOptional = userRepository.findById(id);
            if(userOptional.isPresent()){
                Integer points = userOptional.get().getPoints();
                return new GenericResponse<Integer>(HttpStatus.OK, "OK", true, points);
            } else {
                return new GenericResponse<Integer>(HttpStatus.NOT_FOUND, "User not found", false, null);
            }
        } catch (Exception exception) {
            return new GenericResponse<Integer>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(),
                    false, null);
        }
    }

    public GenericResponse<UserModel> login(String email, String password){
        try {
            UserModel user = userRepository.findByEmail(email);
            if (user != null && user.getPassword().equals(password)) {
                return new GenericResponse<UserModel>(HttpStatus.OK, "OK", true, user);
            } else {
                return new GenericResponse<UserModel>(HttpStatus.UNAUTHORIZED, "Invalid credentials", false, null);
            }
        } catch (Exception exception) {
            return new GenericResponse<UserModel>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(), false, null);
        }
    }


}
