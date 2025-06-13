
-- Tabla para la publicación destacada
CREATE TABLE featured_post (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  subtitulo TEXT,
  texto TEXT,
  link TEXT
);

-- Tabla de testimonios
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  texto TEXT,
  pais VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de publicaciones
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  subtitulo TEXT,
  texto TEXT,
  imagen_url TEXT,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL
);
