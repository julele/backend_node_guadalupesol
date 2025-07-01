--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Ubuntu 14.18-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.18 (Ubuntu 14.18-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: featured_post; Type: TABLE; Schema: public; Owner: sevazar
--

CREATE TABLE public.featured_post (
    id integer NOT NULL,
    titulo text NOT NULL,
    subtitulo text,
    texto text,
    link text
);


ALTER TABLE public.featured_post OWNER TO sevazar;

--
-- Name: featured_post_id_seq; Type: SEQUENCE; Schema: public; Owner: sevazar
--

CREATE SEQUENCE public.featured_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.featured_post_id_seq OWNER TO sevazar;

--
-- Name: featured_post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sevazar
--

ALTER SEQUENCE public.featured_post_id_seq OWNED BY public.featured_post.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: sevazar
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    titulo text NOT NULL,
    subtitulo text,
    texto text,
    imagen_url text,
    fecha_inicio date NOT NULL,
    fecha_fin date NOT NULL
);


ALTER TABLE public.posts OWNER TO sevazar;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: sevazar
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO sevazar;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sevazar
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: testimonials; Type: TABLE; Schema: public; Owner: sevazar
--

CREATE TABLE public.testimonials (
    id integer NOT NULL,
    nombre character varying(100),
    texto text,
    pais character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.testimonials OWNER TO sevazar;

--
-- Name: testimonials_id_seq; Type: SEQUENCE; Schema: public; Owner: sevazar
--

CREATE SEQUENCE public.testimonials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.testimonials_id_seq OWNER TO sevazar;

--
-- Name: testimonials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sevazar
--

ALTER SEQUENCE public.testimonials_id_seq OWNED BY public.testimonials.id;


--
-- Name: featured_post id; Type: DEFAULT; Schema: public; Owner: sevazar
--

ALTER TABLE ONLY public.featured_post ALTER COLUMN id SET DEFAULT nextval('public.featured_post_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: sevazar
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: testimonials id; Type: DEFAULT; Schema: public; Owner: sevazar
--

ALTER TABLE ONLY public.testimonials ALTER COLUMN id SET DEFAULT nextval('public.testimonials_id_seq'::regclass);


--
-- Data for Name: featured_post; Type: TABLE DATA; Schema: public; Owner: sevazar
--

COPY public.featured_post (id, titulo, subtitulo, texto, link) FROM stdin;
1	Bienvenido 222	Primera publicación destacada 22222222	Este es el contenido inicial. 222222222	\N
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: sevazar
--

COPY public.posts (id, titulo, subtitulo, texto, imagen_url, fecha_inicio, fecha_fin) FROM stdin;
2	Prueba	para ver que onda	Patricia Bullrich define el lugar donde quedará detenida Cristina Kirchner: qué opciones se evalúan y el pedido de los abogados\nEl Ministerio de Seguridad estudia dependencias de las fuerzas federales a solicitud de la Justicia. La exmandataria espera quedar en prisión domiciliaria. Se prepara una denuncia ante la Comisión Interamericana de Derechos Humanos (CIDH)	https://www.infobae.com/pf/resources/images/logo_infobae_naranja.svg?d=3258	2025-06-11	2025-06-12
3	SSSSSSSSSSSS	SSSSSSSSSSSSSSSS	ASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS	https://www.quepasasalta.com.ar/files/image/228/228451/671a8daa6029e.png	2025-05-29	2025-06-20
\.


--
-- Data for Name: testimonials; Type: TABLE DATA; Schema: public; Owner: sevazar
--

COPY public.testimonials (id, nombre, texto, pais, created_at) FROM stdin;
1	Juan Perez 	me encanta esta pagina !!!	Argentina	2025-06-12 11:24:16.435
\.


--
-- Name: featured_post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sevazar
--

SELECT pg_catalog.setval('public.featured_post_id_seq', 1, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sevazar
--

SELECT pg_catalog.setval('public.posts_id_seq', 3, true);


--
-- Name: testimonials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sevazar
--

SELECT pg_catalog.setval('public.testimonials_id_seq', 1, true);


--
-- Name: featured_post featured_post_pkey; Type: CONSTRAINT; Schema: public; Owner: sevazar
--

ALTER TABLE ONLY public.featured_post
    ADD CONSTRAINT featured_post_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: sevazar
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: testimonials testimonials_pkey; Type: CONSTRAINT; Schema: public; Owner: sevazar
--

ALTER TABLE ONLY public.testimonials
    ADD CONSTRAINT testimonials_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

