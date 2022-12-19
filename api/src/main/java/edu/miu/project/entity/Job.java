package edu.miu.project.entity;

import jakarta.persistence.OneToOne;

public class Job {
    private String hostingCompany;
    private String businessType;

    @OneToOne;
    private Address address;



}
