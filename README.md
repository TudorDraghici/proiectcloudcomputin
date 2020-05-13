# Proiect Cloud

## Descriere problema

## Arhitectura aplicației

## Instrucțiuni instalare

## Referințe

DOCUMENTATIE

1.	Introducere
Numele meu este Draghici Tudor iar astazi o sa va prezint proiectul meu la materia cloud computing din cadrul masteratului simpre. Ce am realizat aici este o simpla si modesta aplicatie web, realizata in aws amazaon cloud 9, o aplicatie care apeleaza 2 servicii in cloud prin intermediul a doua API Resturi.
2.	Descriere problemă 
Am ales sa creez o aplicatie care poata fi accesata prin intermediul unei pagini web, unde utilizatorul poate gasi versurile melodiei sale preferate in urma unei simple cautari dupa numele artistului si numele melodiei indragite dar si diferite citate ce au fost facute publice de un cantaret indragit la ora actuala.

3.	Descriere API 
Intai de toate as dori sa va prezint aceste api resturi, primul dintre ele este lyrics.ovh care returneaza versurile celor mai cunoscute melodii internationale, dupa artist si numele melodiei. Acesta poate returna versurile melodiilor accesand adresa sa principala lyrics.ovh/v1/ numele artistului / numele melodiei dorite. Cel de al doilea API ales pentru aceasta aplicatie, este un simplu generator aleatoriu de citate celebre ale unui cantaret si anume Kayne West.
4.	Flux de date 
In cadrul acestui proiect, datele urmeaza urmatorul flux: datele sunt in format JSON in  fisierele stocate si publicate de catre cele 2 API-uri, care din urma sunt accesate prin endpoint-urile disponibile ale acestora. Mai departe, in cadrul aplicatiei web, datele sunt apelate in fisierul index.html, ca in final, utilizatorul sa poata avea acces la ceea ce este returnat printr-o metoda HTTP catre URL-ul ce va face trimitere catre pagina in format HTML.
5.	Exemple de request / response
Un exemplu de request/response este urmatoarea secventa de cod, in care eu apelez prin functia fetch API-ul care imi returneaza un raspuns, raspuns ce este stocat intr-o variabila dupa cum urmeaza:

![image](https://user-images.githubusercontent.com/64913989/81803777-d13ab880-9520-11ea-9f48-12c986ecf6b0.png)





6.	Capturi ecran aplicație 

  ![print1](https://user-images.githubusercontent.com/64913989/81803289-22967800-9520-11ea-85d8-362cc595c80e.PNG)



