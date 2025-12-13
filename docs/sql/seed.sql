-- Generate bcrypt hash (PowerShell):
-- node -e "console.log(require('bcryptjs').hashSync('admin12345', 12))"

-- Insert admin:
-- INSERT INTO admin (username, password) VALUES ('admin', '<PASTE_BCRYPT_HASH_HERE>');

-- Sample tours
INSERT INTO tours (name, description, price) VALUES
('City Tour', 'A relaxing city tour', 1200.00),
('Beach Trip', 'A day trip to the beach', 1800.00);
