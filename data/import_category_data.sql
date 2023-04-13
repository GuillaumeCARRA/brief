BEGIN;

TRUNCATE TABLE "category", "product" RESTART IDENTITY;

INSERT INTO "category" ("id", "category_name") 
OVERRIDING SYSTEM VALUE
VALUES (1, 'soin du corps'),
(2, 'soin du visage'),
(3, 'maquillage'),
(4, 'beauté main');

COMMIT;