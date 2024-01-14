package com.testapp.backend.db.repository;

import com.testapp.backend.db.model.ReviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<ReviewEntity, Integer> {
}
