$(document).ready(function() {


	
	$(".play").click(function() {
		var jukebox = new Jukebox()
		jukebox.play()
		
	})

	$(".stop").click(function() {
		var jukebox = new Jukebox()
		jukebox.stop()
		
	})

	$(".next").click(function() {
		var jukebox = new Jukebox()
		jukebox.next()
	})
})


function Jukebox(){
	
	this.currentSong = 0
	
	this.songs = ["a.mp3","b.mp3","c.mp3","d.mp3","e.mp3","f","g.mp3","h.mp3","i.mp3","j.mp3","k.mp3","l.mp3"]
		
		this.play = function(){
		 var audio = $("audio")[0]
		 audio.src = this.songs[this.currentSong]
		 audio.play()
		}

		this.next = function() {
			var audio = $(".audio")[0]

			this.currentSong = this.currentSong + 1
			audio.src = this.songs[this.currentSong]
			audio.play()
		}
		this.stop = function() {
			$("audio")[0].pause()
	}
}