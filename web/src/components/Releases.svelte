<script lang="ts">
	import moth from '../assets/moth.jpeg';
	import insaintvol2 from '../assets/insaintvol2.jpeg';

	interface Artist {
		name: string;
		image: string;
	}

	interface Album {
		title: string;
		artist: Artist[];
		releaseDate: string;
		link: string;
	}

	const albums: Album[] = [
		{
			title: 'March Of The Heaven',
			artist: [{ name: 'Heavenly Castle', image: { moth }.moth }],
			releaseDate: '2023-08-25',
			link: 'https://open.spotify.com/track/4HgCahxNzabSemFgn8m0T1'
		},
		{
			title: 'INSAINT VOL. 2: Insaintly Castle',
			artist: [{ name: 'Insaintly Castle', image: { insaintvol2 }.insaintvol2 }],
			releaseDate: '2023-11-10',
			link: 'https://open.spotify.com/album/6WJ4hgkUoZfolK5WwIk43i'
		},
	];
</script>

<section id="releases">
	<div class="max-w-screen-2xl mx-auto px-4 py-8">
		<h2 class="text-3xl lg:text-4xl text-center lg:text-left font-bold p-8">Latest Releases</h2>
		<div class="grid md:grid-cols-3 lg:grid-cols-4 p-8 gap-4">
			{#each albums.slice(0, 4) as album}
				{#each album.artist as artist}
					<a href={album.link} target="_blank">
						<div class="hover:scale-110 transition-all duration-300 ease-linear">
							<img src={artist.image} alt={artist.name} class="w-full h-full" />
						</div>
					</a>
				{/each}
			{/each}
		</div>
		<div class="flex items-center">
			<button class="mx-auto border-2 bg-bwhite rounded-lg py-2 px-4"> View All Releases </button>
		</div>
	</div>
</section>
