<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import exila from '../assets/exila.webp';
	import lostwind from '../assets/lostwind.webp';
	import arnhemia from '../assets/arnhemia.webp';
	import feelzzsleepy from '../assets/feelzzsleepy.webp';
	import haxsews from '../assets/haxsews.webp';
	import jyohx from '../assets/jyohx.webp';
	import lantara from '../assets/lantara.webp';
	import whoamidesu from '../assets/whoamidesu.webp';
  
	let artists = [
	  { name: "JyoHx", image: jyohx },
	  { name: "LOSTWIND", image: lostwind },
	  { name: "feelzzsleepy", image: feelzzsleepy },
	  { name: "ARNHEMIA", image: arnhemia },
	  { name: 'EXILA', image: exila },
	  { name: "Haxsews", image: haxsews },
	  { name: "Lantara", image: lantara },
	  { name: "whoamidesu", image: whoamidesu }
	];
  
	onMount(() => {
	  const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			gsap.from('.artist-card', {
			  opacity: 0,
			  y: 200,
			  stagger: 0.1,
			  duration: 0.5
			});
			observer.unobserve(entry.target);
		  }
		});
	  }, { threshold: 0.1 });
  
	  const section = document.getElementById('artists');
	  if (section) {
		observer.observe(section);
	  }
	});
</script>
  
<section class="bg-slate-100" id="artists">
	<div class="max-w-screen-2xl mx-auto px-4 py-8">
	  <h2 class="text-4xl font-bold p-8">Our Artists</h2>
	  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-4">
		{#each artists as artist}
		  <div class="artist-card text-white bg-black relative flex items-end">
			<img src={artist.image} alt={artist.name} class="w-full h-full object-cover object-top aspect-square" />
			<h3 class="text-xl md:text-2xl font-bold absolute bottom-0 w-full text-left ml-2 lg:ml-4 py-2">{artist.name}</h3>
		  </div>
		{/each}
	  </div>
	</div>
</section>