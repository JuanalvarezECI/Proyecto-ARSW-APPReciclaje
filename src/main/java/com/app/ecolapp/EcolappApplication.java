package com.app.ecolapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.Date;
import java.util.Collections;
import com.app.ecolapp.Models.RewardModel;
import com.app.ecolapp.Repositories.IRewardRepository;

@SpringBootApplication
public class EcolappApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(EcolappApplication.class, args);

        IRewardRepository rewardRepository = context.getBean(IRewardRepository.class);
	
// ...

RewardModel reward1 = new RewardModel();
reward1.setUnit(5);
reward1.setAddress("123 Main St");
reward1.setCost(100);
reward1.setDescription("Reward 1 description");
reward1.setDueDate(new Date()); // Fecha actual
reward1.setPin("1234");
reward1.setCreationDate(new Date()); // Fecha actual

RewardModel reward2 = new RewardModel();
reward2.setUnit(0);
reward2.setAddress("456 Broadway");
reward2.setCost(200);
reward2.setDescription("Reward 2 description");
reward2.setDueDate(new Date()); // Fecha actual
reward2.setPin("5678");
reward2.setCreationDate(new Date()); // Fecha actual

// Guardar los rewards en la base de datos
rewardRepository.save(reward1);
rewardRepository.save(reward2);
}
	
	
}
