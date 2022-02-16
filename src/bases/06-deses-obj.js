// Destructuración de Objetos

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Iron-man",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usecontext = ({ nombre, edad, clave, rango = "Capitán" }) => {
  // console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.2323,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = usecontext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
