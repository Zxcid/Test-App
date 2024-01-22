DROP TABLE IF EXISTS public.reviews;
DROP TABLE IF EXISTS public.products;
DROP TABLE IF EXISTS public.stores;

CREATE TABLE public.stores
(
    store_id serial4      NOT NULL,
    name     varchar(255) NULL,
    CONSTRAINT stores_pkey PRIMARY KEY (store_id)
);

CREATE TABLE public.products
(
    price       int4          NULL,
    product_id  serial4       NOT NULL,
    store_id    int4          NULL,
    description varchar(4000) NULL,
    category    varchar(255)  NULL,
    employee    varchar(255)  NULL,
    title       varchar(255)  NULL,
    CONSTRAINT products_pkey PRIMARY KEY (product_id),
    CONSTRAINT fkgcyffheofvmy2x5l78xam63mc FOREIGN KEY (store_id) REFERENCES public.stores (store_id)
);

CREATE TABLE public.reviews
(
    product_id int4          NULL,
    review_id  serial4       NOT NULL,
    review     varchar(1000) NULL,
    CONSTRAINT reviews_pkey PRIMARY KEY (review_id)
);
