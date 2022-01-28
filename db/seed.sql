-- step 1 connect to the db
\c animes_dev
-- step 2 add values to our table
INSERT INTO anime (name, release) VALUES 
('One Piece', 1999),
('Naruto', 2002),
('Jujutsu Kaisen', 2020),
('Cowboy Bebop', 1998);
