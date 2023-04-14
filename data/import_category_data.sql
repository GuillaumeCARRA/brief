BEGIN;

TRUNCATE TABLE "category", "product" RESTART IDENTITY;

INSERT INTO "category" ("id", "category_name") 
OVERRIDING SYSTEM VALUE
VALUES (1, 'soin du corps'),
(2, 'soin du visage'),
(3, 'maquillage'),
(4, 'beauté main');

INSERT INTO "product" ("product_name", "product_description", "product_price", "category_id")
VALUES ('crème pour le corps', 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis nunc sed suscipit eleifend.', 14, 1),
('crème pour le visage', 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis nunc sed suscipit eleifend.', 9, 2),
('fond de teint', 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis nunc sed suscipit eleifend.', 15, 3),
('crème main', 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis nunc sed suscipit eleifend.', 7, 4);
COMMIT;