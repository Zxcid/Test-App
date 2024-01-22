package com.testapp.backend.db.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "reviews", schema = "public", catalog = "postgres")
public class ReviewsEntity {
    @Basic
    @Column(name = "product_id", nullable = true)
    private Integer productId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "review_id", nullable = false)
    private int reviewId;
    @Basic
    @Column(name = "review", nullable = true, length = 1000)
    private String review;

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReviewsEntity that = (ReviewsEntity) o;
        return reviewId == that.reviewId && Objects.equals(productId, that.productId) && Objects.equals(review, that.review);
    }

    @Override
    public int hashCode() {
        return Objects.hash(productId, reviewId, review);
    }
}
