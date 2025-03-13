<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	
	onMount(() => {
	  const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
	  gsap.from('.about-heading', {
		duration: 1,
		opacity: 0,
		y: -50,
		ease: 'power3.out',
	  });
  
	  gsap.from('.about-paragraph', {
		duration: 1.5,
		opacity: 0,
		y: 20,
		ease: 'power3.out',
		delay: 0.5,
	  });
  
	  gsap.from('.spotify-iframe', {
		duration: 1.5,
		opacity: 0,
		scale: 0.8,
		ease: 'power3.out',
		delay: 1,
	  });
	  observer.unobserve(entry.target);
		  }
		});
	  }, { threshold: 0.1 });

	  const aboutSection = document.querySelector('#about');
	  if (aboutSection) {
		observer.observe(aboutSection);
	  }
	});


  </script>
  
  <section class="bg-black" id="about">
	  <div class="max-w-screen-2xl mx-auto px-4 py-8 grid lg:grid-cols-2 items-center">
		  <div class="text-white p-8">
			  <h2 class="text-4xl font-bold text-center lg:text-left about-heading">About Us</h2>
			  <p class="text-justify mt-4 about-paragraph">
				  <span class="text-blue-400">Heavenly Castle</span> is a collective and record label based in
				  Indonesia, founded in 2021. Specializing in bass music, our goal is to create a platform where
				  artists can release their tracks and gain exposure within the EDM scene.
			  </p>
		  </div>
  
		  <div class="text-white p-8">
			  <iframe
				  title="spotify"
				  class="spotify-iframe"
				  style="border-radius:12px"
				  src="https://open.spotify.com/embed/playlist/1FxZsLfzIE7QTmOtky2Oaf?utm_source=generator"
				  width="100%"
				  height="352"
				  frameBorder="0"
				  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				  loading="lazy"
			  ></iframe>
		  </div>
	  </div>
  </section>
  