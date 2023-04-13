BEGIN;

DROP TABLE IF EXISTS "category",     
                     "product";

CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "category_name" TEXT NOT NULL
);

CREATE TABLE "product" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "product_name" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" INT NOT NULL, 
    "category_id" INT REFERENCES "category"("id")
);


COMMIT;