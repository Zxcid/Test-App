package com.testapp.backend.db.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "products", schema = "public")
public class ProductEntity {
    @Id
    @Column(name = "product_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productId;
    @Column(name = "price")
    private Integer price;
    @Column(name = "title")
    private String title;
    @Column(name = "category")
    private String category;
    @Column(name = "employee")
    private String employee;
    @Column(name = "description", length = 4000)
    private String description;
    @OneToMany(mappedBy = "product")
    private List<ReviewEntity> reviews;
    @ManyToOne
    @JoinColumn(name = "store_id")
    @JsonIgnore
    private StoreEntity store;
}
