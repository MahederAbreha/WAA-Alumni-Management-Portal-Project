package edu.miu.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class JobExperience {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer Year;
   private  String countryName;
}
