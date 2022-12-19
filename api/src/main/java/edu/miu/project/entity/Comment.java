package edu.miu.project.entity;

import jakarta.persistence.ManyToOne;

public class Comment{
    private String name;
    @ManyToOne;
    private Student student;


}
