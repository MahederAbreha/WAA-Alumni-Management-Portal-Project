package edu.miu.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data

public class Job {
    @Id
    private int id;
    private String hostingCompany;
    private String businessType;

    @OneToOne
    private Address address;



}
