import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const skills = [
  {
    name: 'JavaScript',
    description: 'Un lenguaje de programación interpretado que es fundamental para el desarrollo web.',
    icon_path: '/path/to/javascript_icon.png',
  },
  {
    name: 'Next.js',
    description: 'Un marco de trabajo basado en React que permite la generación de sitios estáticos y aplicaciones web renderizadas en el servidor.',
    icon_path: '/path/to/nextjs_icon.png',
  },
  {
    name: 'Node.js',
    description: 'Una plataforma en tiempo de ejecución de JavaScript, basada en el motor V8 de Chrome, que permite ejecutar código JavaScript en el servidor.',
    icon_path: '/path/to/nodejs_icon.png',
  },
  {
    name: 'React',
    description: 'Una biblioteca de JavaScript para construir interfaces de usuario, generalmente para aplicaciones de una sola página.',
    icon_path: '/path/to/react_icon.png',
  },
  {
    name: 'Redux',
    description: 'Una biblioteca de JavaScript para administrar el estado de la aplicación. Es más comúnmente usado con bibliotecas como React o Angular para construir interfaces de usuario.',
    icon_path: '/path/to/redux_icon.png',
  },
];

const Card = ({ skill }) => (
  <div className="rounded overflow-hidden shadow-lg m-4">
    <img className="w-full h-32 object-cover" src={skill.icon_path} alt={`${skill.name} Icon`} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{skill.name}</div>
      <p className="text-gray-700 text-base">{skill.description}</p>
    </div>
  </div>
);

const Skills = () => (
  <>
    <NavBar />
    <div className="container mx-auto px-4 grid grid-cols-5 gap-4">
      <h1 className="text-3xl font-bold mb-4 w-full text-center">Mis habilidades</h1>
      {skills.map((skill) => (
        <Card skill={skill} key={skill.name} />
      ))}
    </div>
    <Footer />
  </>
);

export default Skills;
