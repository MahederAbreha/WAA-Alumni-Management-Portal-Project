package edu.miu.project.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity

public class Faculty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private double salary;
    private String position;
    @OneToOne
    private Address address;

    @OneToMany
    @JoinColumn(name="Id_Faculty")
    private List<Comment> commentList;
    @OneToMany
    @JoinColumn(name="Id_Faculty")
    private List<JobAdvert> adverts;
}
