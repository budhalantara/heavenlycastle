<script>
    // Dummy data

	import exel from '../assets/exel.jpg';
	import lostwind from '../assets/lostwind.jpg';
	import arnhemia from '../assets/arnhemia.jpg';
	import feelzzsleepy from '../assets/feelzzsleepy.jpeg';
	import haxsews from '../assets/haxsews.jpg'
	import jyohx from '../assets/jyohx.png'
	import lantara from '../assets/lantara.jpg'
	import whoamidesu from '../assets/whoamidesu.jpg'
	let artists = [
		{
			name: "JyoHx",
			image: {jyohx}.jyohx,
		},
		{
			name: "LOSTWIND",
			image: {lostwind}.lostwind,
		},
		{
			name: "feelzzsleepy",
			image: {feelzzsleepy}.feelzzsleepy,
		},
		{
			name: "ARNHEMIA",
			image: {arnhemia}.arnhemia,
		},
		{
			name: 'Exel El Nino',
			image:
				{exel}.exel,
		},
		{
			name: "Haxsews",
			image: {haxsews}.haxsews,
		},
		{
			name: "Lantara",
			image: {lantara}.lantara,
		},
		{
			name: "whoamidesu",
			image: {whoamidesu}.whoamidesu,
		}


	];
</script>

<section class="bg-slate-100">
    <div class="max-w-screen-2xl mx-auto px-4 py-8">
      <h2 class="text-4xl font-bold p-8">Our Artists</h2>
  
      <div class="grid grid-cols-2 lg:grid-cols-4 p-8 gap-4">
        {#each artists as artist}
          <div class="text-white bg-black relative group flex items-end">
            <img src={artist.image} alt={artist.name} class="w-full h-full object-cover object-top aspect-square" />	
            <h3 class="text-xl md:text-2xl font-bold absolute bottom-0 w-full text-left ml-2 lg:ml-4 py-2">{artist.name}</h3>
          </div>
        {/each}
      </div>
    </div>
  </section>
