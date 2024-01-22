INSERT INTO public.stores ("name") VALUES ('Pasticceria AGG'), ('Vineria Campana');

INSERT INTO public.products ("store_id", "price", "description", "title", "category", "employee") VALUES (1, 3, 'Ripieno di ricotta', 'Cassatella', 'Dolci', 'Aldo');
INSERT INTO public.products ("store_id", "price", "description", "title", "category", "employee") VALUES (1, 10, 'cassatelle di ricotta', 'Cassatelle di ricotta', 'Dolci', 'Aldo');
INSERT INTO public.products ("store_id", "price", "description", "title", "category", "employee") VALUES (1, 8,'La torta Sacher è un delizioso dolce di origine austriaca, noto per la sua ricchezza di cioccolato e la combinazione di strati di biscotto, marmellata e glassa di cioccolato.','Sacher', 'Torta', 'Aldo');
INSERT INTO public.products ("store_id", "price", "description", "title", "category", "employee") VALUES (1, 2, 'cannolo di ricotta', 'cannolo', 'Dolci', 'aldo');
INSERT INTO public.products ("store_id", "price", "description", "title", "category", "employee") VALUES (1, 0.80, 'cioccolatini al latte', 'cioccolatini', 'Dolci', 'giovanni');
INSERT INTO public.products ("store_id", "price", "description", "title", "category", "employee") VALUES (1, 4,'Il tiramisù è apprezzato per la sua combinazione di consistenza cremosa, aroma di caffè e dolcezza equilibrata.','Tiramisù', 'Dolci', 'Giovanni');
INSERT INTO public.products ("store_id", "price", "description", "title", "category", "employee") VALUES (1, 12, 'Panettone senza canditi', 'Panettone', 'Dolci di natale', 'giacomo');
INSERT INTO public.products ("store_id", "price", "description", "title", "category", "employee") VALUES (2, 15, '', 'Fiano di Avellino', 'Bianchi', 'Caggiano');
INSERT INTO public.products ("store_id", "price", "description", "title", "category", "employee") VALUES (2, 30, '', 'Taurasi', 'Rossi', 'Mastroberardino');
INSERT INTO public.products ("store_id", "price", "description", "title", "category", "employee") VALUES (2, 14, '', 'Aglianico', 'Rossi', 'Feudi di San Gregorio');


INSERT INTO public.reviews ("product_id", "review") VALUES (1, 'Buonissima');
INSERT INTO public.reviews ("product_id", "review") VALUES (1, 'Perfetta');
INSERT INTO public.reviews ("product_id", "review") VALUES (3, 'Fantastica');
INSERT INTO public.reviews ("product_id", "review") VALUES (3, 'Ne ho mangiate di miglori');
INSERT INTO public.reviews ("product_id", "review") VALUES (7, 'Buon prodotto!');
