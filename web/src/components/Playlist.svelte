<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import logo from '../assets/logo.svg';

	const playlists = [
		{
			title: 'Chill Beats',
			link: 'https://open.spotify.com/embed/playlist/2PXDFEm7eNRpNezx2NXQzZ?utm_source=generator&theme=0'
		},
		{
			title: 'Workout Vibes',
			link: 'https://open.spotify.com/embed/playlist/2PXDFEm7eNRpNezx2NXQzZ?utm_source=generator&theme=0'
		},
		{
			title: 'Pop Hits',
			link: 'https://open.spotify.com/embed/playlist/2PXDFEm7eNRpNezx2NXQzZ?utm_source=generator&theme=0'
		},
		{
			title: 'Rock Classics',
			link: 'https://open.spotify.com/embed/playlist/2PXDFEm7eNRpNezx2NXQzZ?utm_source=generator&theme=0'
		}
	];

	onMount(() => {
		gsap.from('.playlist', {
			duration: 1.5,
			opacity: 0,
			ease: 'power3.out',
			delay: 0.3
		});

		gsap.from('.heading', {
			duration: 1.5,
			opacity: 0,
			y: -100,
			ease: 'power3.out',
			delay: 0.3
		});

		gsap.from('.subheading', {
			duration: 1.5,
			opacity: 0,
			y: -50,
			ease: 'power3.out',
			delay: 0.6
		});
	});
</script>

<style>
    .glowing-logo img {
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
    }
</style>

<div
	class="py-20 min-h-screen bg-gray-700 bg-[url('./assets/bg.webp')] bg-cover bg-center bg-no-repeat"
>
	<div class="glowing-logo invert">
		<img src={logo} alt="Heavenly Castle" class="mx-auto w-32 invert" />
	</div>


	<h2 class="heading text-4xl text-center text-white font-bold mb-8">Our Playlist Collection</h2>
	<p class="subheading text-center text-white text-lg mb-8">Listen to our curated playlists on Spotify</p>

	<!-- Playlist Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
		{#each playlists as { title, link }}
			<!-- Added a 'playlist' class for GSAP targeting -->
			<div
				class="playlist bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
			>
				<div class="p-4">
					<h3 class="text-xl text-white text-center mb-4">{title}</h3>
					<iframe
						{title}
						class="rounded-lg"
						src={link}
						width="100%"
						height="380"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</div>
			</div>
		{/each}
	</div>
</div>
