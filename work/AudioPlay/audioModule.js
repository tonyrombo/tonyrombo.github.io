//'use strict';
(function(window, undefined){
	
	var audio = undefined;
	var loop = false;
	var volumeValue = 0.5;
	var durationElement = undefined;
	var currentTimeElement = undefined;
	var currentSong = undefined;
	var playing = false;
	var muting = false;

	var playlist = new Array();
	playlist[0] = {src:'http://live3.goear.com/listen/dd3713a972be0ac8f12c65ec6d84b4d9/560ef881/sst2/mp3files/09122006/35ca631fec42cf03d419cdaa9365084b.mp3', name:'Star Wars Theme', img:'img/starwars.jpeg'};
	playlist[1] = {src:'/AudioPlay/audio/2.mp3', name:'Instant Crush - Daft Punk', img:'img/daftpunk.png'};
	playlist[2] = {src:'/AudioPlay/audio/3.mp3', name:'Burning Man - Patterns', img:'img/costarica.jpg'};
	// playlist[3] = {src:'/AudioPlay/audio/4.mp3', name:'Paint it black - The Rolling Stones', img:'img/rollingstones.jpeg'};
	// playlist[4] = {src:'/AudioPlay/audio/5.mp3', name:'Hey Soul Sister - Train', img:'img/train.jpg'};
	// playlist[5] = {src:'/AudioPlay/audio/6.mp3', name:'Party Rock Anthem - LMFAO', img:'img/lmfao.png'};
	// playlist[6] = {src:'/AudioPlay/audio/7.mp3', name:'Sexy and I Know It - LMFAO', img:'img/lmfao.png'};
	// playlist[7] = {src:'/AudioPlay/audio/8.mp3', name:'Dont Stop - Foster The People', img:'img/fosterthepeople.png'};
	// playlist[8] = {src:'/AudioPlay/audio/9.mp3', name:'Locked Out of Heaven - Bruno Mars', img:'img/brunomars.jpg'};
	// playlist[9] = {src:'/AudioPlay/audio/10.mp3', name:'Safe and Sound - Capital Cities', img:'img/capitalcities.jpg'};
	// playlist[10] = {src:'/AudioPlay/audio/11.mp3', name:'Get Lucky - Daft Punk', img:'img/daftpunk.png'};
	// playlist[11] = {src:'/AudioPlay/audio/12.mp3', name:'Summertime Sadness - Lana del Rey', img:'img/lanadelrey.jpg'};
	// playlist[12] = {src:'/AudioPlay/audio/13.mp3', name:'Royals - Lorde', img:'img/lorde.jpeg'};
	// playlist[13] = {src:'/AudioPlay/audio/14.mp3', name:'Lets Get Ridiculous - Redfoo', img:'img/redfoo.jpg'};
	// playlist[14] = {src:'/AudioPlay/audio/15.mp3', name:'Animals - Martin Garrix', img:'img/martingarrix.png'};
	// playlist[15] = {src:'/AudioPlay/audio/16.mp3', name:'Blame - Calvin Harris', img:'img/calvinharris.jpg'};
	// playlist[16] = {src:'/AudioPlay/audio/17.mp3', name:'Happy - Pharrel Williams', img:'img/pharrelwilliams.jpg'};
	// playlist[17] = {src:'/AudioPlay/audio/18.mp3', name:'Rather Be - Clean Bandit', img:'img/cleanbandit.jpg'};
	// playlist[18] = {src:'/AudioPlay/audio/19.mp3', name:'Break Free - Ariana Grande', img:'img/arianagrande.jpg'};
	// playlist[19] = {src:'/AudioPlay/audio/20.mp3', name:'The Monster - Eminem Ft. Rihanna', img:'img/themonster.jpg'};


	function setPlaylist(song){
		var content = "";
		for (var i = 0; i < song.length; i++) {
			content += '<li onclick="player.selectSong('+i+')" class="song-item" id="'+i+'"><p>'+song[i].name+'</p></li>';
		};
		document.getElementById('songsContainer').innerHTML = content;
	}



	function init(){
		audio = document.createElement('audio');
		audio.setAttribute('src', playlist[0].src);
		currentSong = 0;
		audio.durationchange = duration;
		audio.volume = volumeValue; // 50%


		durationElement = document.getElementById('duration');
		currentTimeElement = document.getElementById('currentTime');
		document.getElementById("songCover").setAttribute("src", playlist[0].img);
		document.getElementById("coverImg").style.backgroundImage = "url(" + playlist[0].img+")";
		// audio events
		audio.addEventListener('timeupdate',setCurrentDuration);
		currentTimeElement.addEventListener('change', setSongTime);
		audio.addEventListener('ended', playNext);
		
		setCurrentDuration();
	}

	function togglePlay(){
		playing = !playing;
		if (playing) {
			play();
			
		}else{
			pause();
		}
	}

	function play(){
		audio.play();

		document.getElementById('songName').innerHTML = '<p>Reproduciendo: '+playlist[currentSong].name+'</p>';
		document.getElementById("songCover").setAttribute("src", playlist[currentSong].img);
		document.getElementById("coverImg").style.backgroundImage = "url(" + playlist[currentSong].img+")";

		document.getElementById('playIcon').classList.remove('fa-play');
		document.getElementById('playIcon').classList.add('fa-pause');
	};

	function pause(){
		audio.pause();

		document.getElementById('playIcon').classList.remove('fa-pause');
		document.getElementById('playIcon').classList.add('fa-play');
	};

	function selectSong(id){
		audio.setAttribute('src', playlist[id].src);
		currentSong = id;
		play();
	};

	function prevSong(){
		if (currentSong <= 0) {
			selectSong(0);
		}else{
			currentSong--;
			selectSong(currentSong);
		}
	}

	function playNext(){
		if (audio.currentTime == audio.duration) {
			nextSong();
		};
	}

	function nextSong(){
		if (currentSong >= playlist.length) {
			selectSong(currentSong);
		}else{
			currentSong++;
			selectSong(currentSong);
		}
	}

	function repeat(button){
		loop = !loop;
		if(loop){
			audio.setAttribute('loop', '');
			button.classList.add('active');
		}else{
			audio.removeAttribute('loop');
			button.classList.remove('active');
		}
	};

	function volume(){
		audio.volume = document.getElementById('volumeBar').value;
	};

	function mute(){
		muting =!muting;
		if (muting) {
			audio.volume = 0;
			document.getElementById('muteBtn').classList.add('active')
		}else{
			audio.volume = volumeValue;
			document.getElementById('muteBtn').classList.remove('active');
		}
	}

	function setSongTime(){
		var songTime = currentTimeElement.value;
		audio.currentTime = songTime;
	}

	function setCurrentDuration(){
		var sencondFormat = undefined;
		var secondsDurationFormat = undefined;
		var fullTime = Math.floor(audio.currentTime);
		var fullDuration = Math.floor(audio.duration);
		var minutes;
		var seconds;
		var minutesDuration;
		var secondsDuration;
		var durationTime = Math.floor(audio.duration);

		currentTimeElement.value = audio.currentTime;
		currentTimeElement.setAttribute('max', durationTime);

		if (isNaN(fullDuration)){
			minutesDuration = 0;
			secondsDuration = 0;
		}else{
			minutesDuration =  Math.floor(audio.duration / 60);
			secondsDuration = fullDuration - minutesDuration * 60;
		}

		

		minutes = Math.floor(audio.currentTime / 60);
		seconds = fullTime - minutes * 60;
		
		currentTimeElement.value = fullTime;
		
		secondFormat = convertFormat(seconds);
		secondsDurationFormat = convertFormat(secondsDuration);
		
		durationElement.innerHTML = minutes + ":" + secondFormat + " / " + minutesDuration + ":" + secondsDurationFormat;

	}

	function convertFormat(seconds){
		var secondsb = "";
		seconds = seconds.toString();

		if(seconds.length < 2){
			secondsb = "0";
			secondsb += seconds;
		}else{
			secondsb = seconds;
		}
		return secondsb;
		console.log(secondsb)
	}

	// Javascript Class using Revealing Module Pattern
	window.Player = function(){
		
		setPlaylist(playlist);
		init();

		// Revealing Module Pattern
		return {
			togglePlay : togglePlay,
			prevSong : prevSong,
			nextSong : nextSong,
			selectSong: selectSong,
			play: 	play,
			pause: 	pause,
			repeat: repeat,
			volume: volume,
			mute: mute
		};
	}

})(window, undefined);