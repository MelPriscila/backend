class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = ["perro","gato"];
        this.libros = []
    } 

    getFullName = () => {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
     }
 
    addMascota = () =>{
       this.mascotas.push("caballo");
       console.log(this.mascotas)
     }
 
    countMascotas = () => {
       console.log( `Tengo ${this.mascotas.length} mascotas`);
     }
 
     addBook(nombre, autor) {
       this.libros.push({
          nombre: nombre,
          autor: autor
       })
     }
 
    getBookNames() {
         return this.libros.map(libro => libro.nombre);   
    }
    
   
  }
 
 const usuario1 = new Usuario("Melanie", "Lema")
 
 
 usuario1.getFullName();
 usuario1.addMascota();
 usuario1.countMascotas();
 usuario1.addBook("nombre: 1984", "autor: George Orwell");
 usuario1.addBook("nombre: Fahrenheit 451", "autor: Ray Bradbury");
 
 console.log(`Los libros de ${usuario1.nombre} son: ${usuario1.getBookNames()}`)