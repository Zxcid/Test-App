package com.testapp.backend.db.repository;

import com.testapp.backend.db.model.ReviewsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<ReviewsEntity, Integer> {
}
