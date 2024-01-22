package com.testapp.backend.controller;

import com.testapp.backend.constants.AppConstants;
import com.testapp.backend.db.model.ProductsEntity;
import com.testapp.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.MessageFormat;
import java.util.List;

import static com.testapp.backend.constants.AppConstants.*;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @PostMapping("/save")
    public ResponseEntity<?> postProduct(@RequestBody ProductsEntity product,
                                         @RequestParam(name = "storeId") Integer storeId) {
        ProductsEntity saved;
        if (storeId != null) {
            product.setStoreId(storeId);
            saved = productService.saveProduct(product);
            if (saved != null)
                return ResponseEntity.ok().body(saved);
            else
                return ResponseEntity.internalServerError().body(AppConstants.PRODUCT_ERROR);
        } else {
            return new ResponseEntity<>(MessageFormat.format(INVALID_PARAM_RESPONSE, "storeId"), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteProduct(@RequestParam(name = "productId") Integer productId) {
        if (productId != null) {
            try {
                productService.deleteProduct(productId);
                return ResponseEntity.ok().build();
            } catch (Exception e) {
                return ResponseEntity.internalServerError().body(e.getMessage());
            }
        } else {
            return new ResponseEntity<>(MessageFormat.format(INVALID_PARAM_RESPONSE, "productId"), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProductsByStoreId(@RequestParam(name = "storeId")Integer storeId) {
        if (storeId != null) {
            try {
                List<ProductsEntity> products = productService.getAllByStoreId(storeId);
                if (!products.isEmpty()) {
                    return ResponseEntity.ok().body(products);
                } else {
                    return new ResponseEntity<>("No entity found for the given store id.", HttpStatus.NO_CONTENT);
                }
            } catch (Exception e) {
                return ResponseEntity.internalServerError().body(e.getMessage());
            }
        } else {
            return ResponseEntity.badRequest().body(MessageFormat.format(INVALID_PARAM_RESPONSE, "storeId"));
        }
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Integer id) {
        //TODO
        return ResponseEntity.ok().build();
    }
}
