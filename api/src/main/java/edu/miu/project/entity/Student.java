package edu.miu.project.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity

public class Student{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private double GPA;
    private String major;
    @OneToMany
    @JoinColumn(name="Id_Student")
    private List<JobAdvert> jobAdvertList;

    @OneToMany
    @JoinColumn(name="Id_Student")
    private List<JobExperience> jobExperienceList;

    @OneToMany
    @JoinColumn(name="Id_Student")
    private List<Job> jobList;
}
