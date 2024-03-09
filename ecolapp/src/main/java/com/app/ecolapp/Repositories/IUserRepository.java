package com.app.ecolapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.ecolapp.Models.UserModel;

@Repository
public interface IUserRepository extends JpaRepository<UserModel, Long> {


}
