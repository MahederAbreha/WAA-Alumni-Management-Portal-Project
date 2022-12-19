package edu.miu.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Comment{
    @Id
    private int id;
    private String comment;
    @OneToOne
    private Student student;


}
