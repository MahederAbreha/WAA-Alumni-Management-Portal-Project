package edu.miu.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data

public class JobAdvert {
    @Id
    private int id;
    private Date date;
    private String description;
    private String file;


}
