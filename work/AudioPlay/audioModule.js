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
	playlist[1] = {src:'http://live3.goear.com/listen/871af7132e309aa157f249c959bd803a/560ef93d/sst10/mp3files/14052013/598f7957185f4b3c366801a1ceb45fcd.mp3', name:'Instant Crush - Daft Punk', img:'img/daftpunk.png'};
	playlist[2] = {src:'http://live2.goear.com/listen/7fe5182059a1a4191abab2edbdde1777/560ef995/sst13/mp3files/29032014/e8a1b1ae81554e961a32fb523bad5d44.mp3', name:'Burning Man - Patterns', img:'img/costarica.jpg'};
	playlist[3] = {src:'http://live8.goear.com/listen/716a1e6d0badf7a051ec185027d77017/560efa15/sst11/mp3files/11062013/740bba44e36341290eb6483be162f022.mp3', name:'Paint it black - The Rolling Stones', img:'img/rollingstones.jpeg'};
	playlist[4] = {src:'http://live6.goear.com/listen/7ae105ea38ef192168cccb596bd4ffba/560efa91/sst7/mp3files/20092011/c160ec96c1d6604d76291f7ca3fcc47c.mp3', name:'Hey Soul Sister - Train', img:'img/train.jpg'};
	playlist[5] = {src:'http://live6.goear.com/listen/34375c54a7714cfe259717f4e845771a/560efb60/sst7/mp3files/26032011/ed8c8198092d96032353dc0ac3c76f3d.mp3', name:'Party Rock Anthem - LMFAO', img:'img/lmfao.png'};
	playlist[6] = {src:'http://live8.goear.com/listen/469487bc3c38e77a6bb60330febf76d7/560efbbd/sst12/mp3files/29012014/218e410510c3969ec3c751ad78f0ae1f.mp3', name:'Sexy and I Know It - LMFAO', img:'img/lmfao.png'};
	playlist[7] = {src:'http://live6.goear.com/listen/556fd24512426c05f54660c3318b6b2c/560efc28/sst7/mp3files/01082011/74d1e42c66cdfbb76fac0bc603a76906.mp3', name:'Dont Stop - Foster The People', img:'img/fosterthepeople.png'};
	playlist[8] = {src:'http://live3.goear.com/listen/871a673ac7ff8cfd3b38bc309e8e2fab/560efc6c/sst9/mp3files/07112012/57d2e80021e5196ac18a2d6553ff2d8d.mp3', name:'Locked Out of Heaven - Bruno Mars', img:'img/brunomars.jpg'};
	playlist[9] = {src:'http://live2.goear.com/listen/7cfd5af35392a30ee90edfff24143bda/560efd02/sst13/mp3files/02102014/277898f4a3a8782b2eba6f5e69bfe984.mp3', name:'Safe and Sound - Capital Cities', img:'img/capitalcities.jpg'};
	playlist[10] = {src:'http://live6.goear.com/listen/df28f75bf0c625d60cb4e3e6300d78d7/560efda9/sst10/mp3files/18042013/d2c1105fbb58b24d0de8bbdb608c87b1.mp3', name:'Get Lucky - Daft Punk', img:'img/daftpunk.png'};
	playlist[11] = {src:'http://live3.goear.com/listen/0df4d90e55d00d66fb23331009b1f634/560efebe/sst9/mp3files/19102012/eed1b1aff0e3638ffbcb07aff185f70a.mp3', name:'Summertime Sadness - Lana del Rey', img:'img/lanadelrey.jpg'};
	playlist[12] = {src:'http://live2.goear.com/listen/45de65e165fab0a77b16f5b03eab258c/560eff2f/sst13/mp3files/07112014/a3e1d85bd302d070f77ad424ec47cb6a.mp3', name:'Royals - Lorde', img:'img/lorde.jpeg'};
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