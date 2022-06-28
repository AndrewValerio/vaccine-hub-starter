\echo 'Delete and recreate vaccine_hub_api db?'
\prompt 'Return for yes or control-C to cancel > ' answer
DROP DATABASE vaccine_hub_api;
CREATE DATABASE vaccine_hub_api;
\connect vaccine_hub_api;

\i vaccine-hub-schema.sql


