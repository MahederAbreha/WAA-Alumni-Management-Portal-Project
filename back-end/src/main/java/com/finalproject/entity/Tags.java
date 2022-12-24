package com.finalproject.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Tags {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

}
