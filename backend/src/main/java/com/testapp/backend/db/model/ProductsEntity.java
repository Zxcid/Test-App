package com.testapp.backend.db.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "products", schema = "public", catalog = "postgres")
public class ProductsEntity {
    @Basic
    @Column(name = "price", nullable = true)
    private Integer price;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "product_id", nullable = false)
    private int productId;
    @Basic
    @Column(name = "store_id", nullable = true)
    private Integer storeId;
    @Basic
    @Column(name = "description", nullable = true, length = 4000)
    private String description;
    @Basic
    @Column(name = "category", nullable = true, length = 255)
    private String category;
    @Basic
    @Column(name = "employee", nullable = true, length = 255)
    private String employee;
    @Basic
    @Column(name = "title", nullable = true, length = 255)
    private String title;

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public Integer getStoreId() {
        return storeId;
    }

    public void setStoreId(Integer storeId) {
        this.storeId = storeId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getEmployee() {
        return employee;
    }

    public void setEmployee(String employee) {
        this.employee = employee;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductsEntity that = (ProductsEntity) o;
        return productId == that.productId && Objects.equals(price, that.price) && Objects.equals(storeId, that.storeId) && Objects.equals(description, that.description) && Objects.equals(category, that.category) && Objects.equals(employee, that.employee) && Objects.equals(title, that.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(price, productId, storeId, description, category, employee, title);
    }
}
