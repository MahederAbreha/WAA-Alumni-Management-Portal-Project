package com.finalproject.repository;

import com.finalproject.entity.Tags;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagsRepo extends CrudRepository<Tags, Long> {

}
