package com.testapp.backend.db.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "stores", schema = "public")
public class StoreEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "store_id", nullable = false)
    private Integer storeId;
    @Column(name = "name")
    private String name;
    @OneToMany(mappedBy = "store")
    private List<ProductEntity> products;
}
