package com.app.ecolapp.Repositories;


import org.springframework.data.jpa.repository.JpaRepository;


import com.app.ecolapp.Models.RewardModel;

public interface IRewardRepository extends JpaRepository<RewardModel, Long>{

}
