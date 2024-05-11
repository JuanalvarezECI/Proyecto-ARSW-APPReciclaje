package com.app.ecolapp.repositories;


import org.springframework.data.jpa.repository.JpaRepository;


import com.app.ecolapp.models.RewardModel;

public interface IRewardRepository extends JpaRepository<RewardModel, Long>{

}
