INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (nextval('proizvodjac_seq'), 'Jaffa DOO Crvenka', 'Marsala Tita 245, Crvenka','+3812549755');
INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (nextval('proizvodjac_seq'), 'Fruvita', 'Trg Nikole Pasica 5, Beograd','+3812552335');
INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (nextval('proizvodjac_seq'), 'Banini', 'Nikola Tesla 5, Kikinda','+381589962');
INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (nextval('proizvodjac_seq'), 'Frikom', 'Zrenjaninski put bb, Beograd','+3812575235');
INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (nextval('proizvodjac_seq'), 'Nectar Group', 'Djordja Stanojevica 12, Beograd','+38126785');
INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (nextval('proizvodjac_seq'), 'The Coca-Cola Company', 'Batajnicki drum 14-15, Beograd','+381222666');
INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (nextval('proizvodjac_seq'), 'Ben & Jery', 'Waterbury Village, USA','+381288885');
INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (nextval('proizvodjac_seq'), 'Bambi Pozarevac', 'Djure Djakovica bb, Pozarevac','+38122312');
INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (nextval('proizvodjac_seq'), 'Stark', 'Bulevar Peka Dapcevica 29, Beograd','+3812245687');
INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (nextval('proizvodjac_seq'), 'Marbo Product', 'Djordja Stanojevica 14, Beograd','+3812222333');

INSERT INTO "proizvodjac" ("id","naziv","adresa","kontakt")
VALUES (-100, 'TestNaz', 'TestAdresa','+3812222333');

--PROIZVOD PODACI

INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'),'Hello!, 1L',2);
INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'Next, 1L', 5);
INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'Coca-Cola, 1L', 6);

INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'Quattro, 900ml', 4);
INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'King Chocolate Obsession, 450ml', 4);
INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'Ben & Jerry Ice Cream, 450ml', 7);

INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'Jaffa, 150g', 1);
INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'Plazma, 150g', 8);
INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'Domacica, 300g', 3);

INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'Smoki 250g party pack', 9);
INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'Trik stapici, 200g', 3);
INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (nextval('proizvod_seq'), 'Chipsy XXL, 150g', 10);

INSERT INTO "proizvod" ("id","naziv","proizvodjac")
VALUES (-100, 'TestNaziv', 10);

--RACUN PODACI

INSERT INTO "racun" ("id","datum","nacin_placanja")
VALUES (nextval('racun_seq'), to_date('05.05.2020.', 'dd.mm.yyyy.'),'gotovina');
INSERT INTO "racun" ("id","datum","nacin_placanja")
VALUES (nextval('racun_seq'), to_date('02.03.2021.', 'dd.mm.yyyy.'),'nalog za prenos');
INSERT INTO "racun" ("id","datum","nacin_placanja")
VALUES (nextval('racun_seq'), to_date('15.05.2020.', 'dd.mm.yyyy.'),'gotovina');
INSERT INTO "racun" ("id","datum","nacin_placanja")
VALUES (nextval('racun_seq'), to_date('01.02.2021.', 'dd.mm.yyyy.'),'nalog za prenos');
INSERT INTO "racun" ("id","datum","nacin_placanja")
VALUES (nextval('racun_seq'), to_date('13.10.2020.', 'dd.mm.yyyy.'),'nalog za prenos');

INSERT INTO "racun" ("id","datum","nacin_placanja")
VALUES (-100, to_date('12.04.2021', 'dd.mm.yyyy.'),'nalog za prenos');

--STAVKA RACUNA PODACI

INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),1,30,'komad',70,1,1);
INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),2,20,'komad',100,1,2);
INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),3,30,'komad',120,1,3);

INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),1,50,'komad',150,2,4);
INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),2,25,'komad',110,2,5);
INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),3,30,'komad',120,2,6);

INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),1,60,'komad',75,3,7);
INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),2,80,'komad',125,3,8);
INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),3,30,'komad',115,3,9);

INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),1,40,'komad',70,4,10);
INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),2,30,'komad',80,4,11);
INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),3,25,'komad',60,4,12);
INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),1,50,'komad',100,5,10);
INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (nextval('stavka_racuna_seq'),2,60,'komad',120,5,6);

INSERT INTO "stavka_racuna" ("id","redni_broj","kolicina","jedinica_mere","cena","racun","proizvod")
VALUES (-100,1,1,'komad',120,1,1);

