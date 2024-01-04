CREATE TABLE "Ordenes_servicio"(
    "id" INT NOT NULL,
    "id_orden_servicio" VARCHAR(255) NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "estado" TINYINT NOT NULL,
    "etapa" VARCHAR(255) NOT NULL,
    "reprogramado" TINYINT NOT NULL,
    "motivo_rep" VARCHAR(255) NOT NULL
);
CREATE TABLE "Usuarios"(
    "id" INT NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "rol" TINYINT NOT NULL
);
CREATE TABLE "Motivo_paradas"(
    "id" INT NOT NULL,
    "motivo" VARCHAR(255) NOT NULL
);
CREATE TABLE "Paradas"(
    "id" INT NOT NULL,
    "id_orden" INT NOT NULL,
    "tipo" TINYINT NOT NULL,
    "motivo_id" INT NOT NULL,
    "date" DATE NOT NULL
);
ALTER TABLE
    "Motivo_paradas" ADD CONSTRAINT "motivo_paradas_id_foreign" FOREIGN KEY("id") REFERENCES "Paradas"("motivo_id");
ALTER TABLE
    "Ordenes_servicio" ADD CONSTRAINT "ordenes_servicio_id_foreign" FOREIGN KEY("id") REFERENCES "Paradas"("id_orden");