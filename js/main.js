const aboutme = document.getElementById('about-me');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

const uploadSection = (entradas, observador) => {

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		}
	});
}

const observador = new IntersectionObserver(uploadSection, {
	root: null,
	threshold: 1.0
});

observador.observe(aboutme);
observador.observe(skills);
observador.observe(projects);
observador.observe(contact);